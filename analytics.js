// analytics.js — подключать ПОСЛЕ auth.js на каждой закрытой странице
// (использует AUTH_WORKER_URL и session_token, которые выставляет auth.js).
//
// НЕ шлёт один запрос на каждое действие — копит события в памяти и
// отправляет батчем раз в 30с ИЛИ когда накопится 20 штук (что раньше).
// Это принципиально: KV на бэкенде имеет дневной лимит записей, и
// write-per-click на активном сайте выжрет его за пару часов. Батчинг
// снижает число KV.put в разы, почти без потери детализации для дашборда.
//
// Использование из другого кода на странице:
//   window.trackEvent("tab_click", "reading");
//   window.trackEvent("task_done", "listening");
//   window.trackEvent("task_error", "writing");
// login отправляется автоматически один раз за визит (см. ниже), руками
// звать не нужно.
(function () {
var QUEUE_KEY = "analytics_queue_v1"; // localStorage — переживает быструю перезагрузку страницы между табами меню
var FLUSH_INTERVAL_MS = 30000;
var MAX_BATCH = 20;
var queue = [];
var flushTimer = null;

// Восстанавливаем то, что не успело уйти до перезагрузки/закрытия вкладки —
// иначе события просто теряются каждый раз, когда человек переходит между
// страницами сайта (это отдельные загрузки, JS-память не переживает переход).
try {
var saved = localStorage.getItem(QUEUE_KEY);
if (saved) {
var parsed = JSON.parse(saved);
if (Array.isArray(parsed)) queue = parsed.slice(0, MAX_BATCH);
localStorage.removeItem(QUEUE_KEY);
}
} catch (e) {}

function persistQueue() {
// На случай ухода со страницы между тиками таймера — не теряем накопленное.
try { localStorage.setItem(QUEUE_KEY, JSON.stringify(queue)); } catch (e) {}
}

async function flush(useBeacon) {
if (!queue.length) return;
if (!window.authReady) { persistQueue(); return; } // auth.js ещё не подтвердил токен — рано слать
var token = localStorage.getItem("session_token");
if (!token) { queue = []; return; } // разлогинен — некому приписывать события, тихо отбрасываем

var batch = queue.slice(0, MAX_BATCH);
queue = queue.slice(MAX_BATCH);

var payload = JSON.stringify({ events: batch });

// sendBeacon — для случая выгрузки страницы (переход по ссылке, закрытие
// вкладки): обычный fetch может не успеть завершиться, beacon переживает.
// Не поддерживает Authorization header, поэтому только когда это НЕ
// критично потерять (see catch below — при отказе просто теряем батч,
// это статистика, а не платёжные данные).
if (useBeacon && navigator.sendBeacon) {
try {
var blob = new Blob([payload], { type: "application/json" });
// Токен передать нельзя через sendBeacon без кастомных заголовков —
// воркер всё равно требует Authorization, так что beacon-путь тут
// реально сработает только если бэкенд когда-нибудь научится принимать
// токен в теле запроса. Пока просто пробуем — сработает не всегда,
// но лучше, чем гарантированно ничего не отправить при закрытии вкладки.
navigator.sendBeacon(AUTH_WORKER_URL + "track", blob);
return;
} catch (e) {}
}

try {
await fetch(AUTH_WORKER_URL + "track", {
method: "POST",
headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
body: payload
});
} catch (e) {
// Сеть недоступна — событие теряется. Это метрики, не критичные данные,
// не ретраим бесконечно, чтобы не плодить сложность ради статистики.
}
}

function scheduleFlush() {
if (flushTimer) return;
flushTimer = setTimeout(function () {
flushTimer = null;
flush(false);
if (queue.length) scheduleFlush(); // остались события (например > MAX_BATCH накопилось) — планируем ещё раз
}, FLUSH_INTERVAL_MS);
}

window.trackEvent = function (type, meta) {
queue.push({ type: type, meta: meta || null });
if (queue.length >= MAX_BATCH) {
flush(false);
} else {
scheduleFlush();
}
};

// login — ровно один раз за визит на страницу, не за клик. Ждём auth-ready,
// чтобы не засчитать визит с невалидным/просроченным токеном.
function trackLoginOnce() {
window.trackEvent("login");
}
if (window.authReady) {
trackLoginOnce();
} else {
document.addEventListener("auth-ready", trackLoginOnce, { once: true });
}

// Ловим необработанные JS-ошибки на странице — это и есть "технические
// ошибки/сбои" из аналитики. meta обрезаем до 80 символов на бэкенде всё
// равно, но обрезаем и тут, чтобы не таскать целый stack trace в очереди.
window.addEventListener("error", function (e) {
var msg = (e && e.message) ? String(e.message).slice(0, 80) : "unknown_error";
window.trackEvent("page_error", msg);
});

// При уходе со страницы — последняя попытка отправить накопленное через
// beacon (см. комментарий в flush про его ограничения), и сохраняем
// оставшееся в localStorage на случай если beacon тоже не сработает —
// следующая загрузка страницы (см. восстановление очереди выше) подхватит.
window.addEventListener("pagehide", function () {
persistQueue();
flush(true);
});
})();
