// auth.js — подключать первой строкой в <head> на каждой закрытой странице
// Сразу скрываем страницу до проверки токена
document.documentElement.style.visibility = "hidden";

// !!! ЗАМЕНИ ЭТИ ДВА URL НА СВОИ ПОСЛЕ ДЕПЛОЯ ВОРКЕРОВ !!!
// AUTH_WORKER_URL  — воркер безопасности/логина (auth-worker.js)
// AI_WORKER_URL    — воркер нейросети (ai-worker.js)
// Специально разделены на два URL, чтобы безопасность и нейросеть физически
// жили в разных Workers, как и должно быть.
var AUTH_WORKER_URL = "https://auth-worker.gegeodin.workers.dev/";
var AI_WORKER_URL = "https://ai-worker.gegeodin.workers.dev/";

(async function() {
  var token = localStorage.getItem("session_token");

  if (!token) {
    window.location.href = "/l/login.html";
    return;
  }

  // Проверяем токен у auth-worker
  try {
    var res = await fetch(AUTH_WORKER_URL + "check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ check: true })
    });

    if (res.status === 401 || res.status === 403) {
      localStorage.removeItem("session_token");
      window.location.href = "/l/login.html?expired=1";
      return;
    }

    // Сохраняем реальное имя пользователя — страницы (menu.html) читают
    // его синхронно из localStorage вместо отдельного запроса.
    if (res.ok) {
      var checkData = await res.json();
      if (checkData.displayName) localStorage.setItem("display_name", checkData.displayName);
      if (checkData.username) localStorage.setItem("username", checkData.username);
    }
  } catch(e) {
    // Если сеть недоступна — пускаем, токен есть локально
    console.warn("Auth check failed, proceeding offline:", e.message);
  }

  // Показываем страницу только после успешной проверки
  document.documentElement.style.visibility = "visible";

  // Сигнал для остальных скриптов на странице: проверка токена завершена,
  // display_name/username (если были) уже лежат в localStorage. Два способа
  // сразу — флаг для скриптов, которые проверяют ПОСЛЕ того, как auth.js уже
  // закончил, и событие для скриптов, которые начали слушать ДО этого. Без
  // этого скрипты, подключённые ниже auth.js, могут прочитать localStorage
  // раньше, чем asynchronous-проверка здесь успеет её записать — auth.js
  // не блокирует остальную загрузку страницы, пока идёт await fetch(...).
  window.authReady = true;
  document.dispatchEvent(new CustomEvent("auth-ready"));
})();

// Функция для вызова Gemini через ai-worker — используй вместо прямого fetch.
// Это универсальный fallback (бьёт в "/" ai-worker'а с произвольным промптом).
// Для специализированных задач (генерация задания, проверка ответа, вопрос
// ученика и т.д.) лучше звать конкретные эндпоинты ai-worker'а напрямую —
// см. AI_WORKER_URL + "generate-task" и т.п. в menu.html.
window.callGemini = async function(prompt, generationConfig) {
  var token = localStorage.getItem("session_token");
  var GEMINI_MODEL = "gemini-2.5-flash";

  if (!token) {
    window.location.href = "/l/login.html";
    throw new Error("Нет токена");
  }

  var controller = new AbortController();
  var timer = setTimeout(function() { controller.abort(); }, 25000);

  try {
    var res = await fetch(AI_WORKER_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        model: GEMINI_MODEL,
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: generationConfig || { temperature: 0.8 }
      })
    });
    clearTimeout(timer);

    if (res.status === 401 || res.status === 403) {
      localStorage.removeItem("session_token");
      window.location.href = "/l/login.html?expired=1";
      throw new Error("Сессия истекла");
    }

    var text = await res.text();
    if (!res.ok) {
      var m = "HTTP " + res.status;
      try { m = JSON.parse(text).error.message; } catch(e) {}
      throw new Error(m);
    }

    var data = JSON.parse(text);
    var r = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!r) throw new Error("Tukša atbilde.");
    return r;
  } catch(e) {
    clearTimeout(timer);
    if (e.name === "AbortError") throw new Error("Timeout.");
    throw e;
  }
};

// === Полноценный выход: удаляет текущую сессию на сервере, потом чистит localStorage ===
window.logout = async function() {
  var token = localStorage.getItem("session_token");
  if (token) {
    try {
      await fetch(AUTH_WORKER_URL + "logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({})
      });
    } catch(e) {
      // Даже если сеть недоступна — всё равно чистим локально,
      // чтобы человек не остался залогинен на этом устройстве визуально.
      // Сессия на сервере может остаться активной до истечения TTL (30 дней),
      // но локально человек выйдет корректно.
      console.warn("Logout request failed, clearing local session anyway:", e.message);
    }
  }
  localStorage.removeItem("session_token");
  localStorage.removeItem("display_name");
  localStorage.removeItem("username");
  window.location.href = "/l/";
};
