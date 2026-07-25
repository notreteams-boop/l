// ============================================================================
// QUESTION BANK — банк вопросов для вступительного теста (test.html)
// ============================================================================
// 50 вопросов: ~33 grammar (грамматика, multiple-choice) +
// ~17 reading (чтение с коротким passage, вопросы
// на понимание текста, как в официальном тесте VIAA).
//
// Формат объекта: { id, block, passage (только reading), question, options[4],
//                   correct (индекс 0-3), explanation_lv, explanation_ru, level }
// level — приблизительный уровень CEFR данного вопроса, для
// внутренней аналитики теста, не отображается напрямую, лишь
// используется для расчёта общего уровня (level) в результате.
// explanation_lv/explanation_ru — объяснение правильного ответа
// на латышском и русском (переключатель языка в test-result.html).
//
// Загружается как обычный <script> в test.html/test-result.html, определяет
// глобальную переменную QUESTION_BANK.
// ============================================================================

var QUESTION_BANK = [

  // ————————————————— GRAMMAR (33 jautājumi) —————————————————

  { id:"g01", block:"grammar", level:"A2",
    question:"She ___ to the gym every morning before work.",
    options:["go","goes","going","gone"], correct:1,
    explanation_lv:"Present Simple, 3.pers. vsk. (she) prasa -s: goes.", explanation_ru:"Present Simple, 3-е лицо ед.ч. (she) требует -s: goes." },

  { id:"g02", block:"grammar", level:"A2",
    question:"They ___ watching a film when the power went out.",
    options:["was","were","are","have been"], correct:1,
    explanation_lv:"Past Continuous ar 'they' lieto 'were' + verb-ing.", explanation_ru:"Past Continuous с 'they' использует 'were' + verb-ing." },

  { id:"g03", block:"grammar", level:"B1",
    question:"If I ___ more time, I would learn another language.",
    options:["have","had","will have","having"], correct:1,
    explanation_lv:"Otrais kondicionālis (nereāla tagadne): If + past simple, would + infinitive.", explanation_ru:"Второй тип условных (нереальное настоящее): If + past simple, would + infinitive." },

  { id:"g04", block:"grammar", level:"A2",
    question:"This is the ___ interesting book I've ever read.",
    options:["more","most","much","many"], correct:1,
    explanation_lv:"Garāka īpašības vārda superlatīvs: 'most interesting'.", explanation_ru:"Превосходная степень длинного прилагательного: 'most interesting'." },

  { id:"g05", block:"grammar", level:"B1",
    question:"By the time we arrived, the meeting ___ already ___.",
    options:["has / started","had / started","was / starting","have / start"], correct:1,
    explanation_lv:"Past Perfect darbībai, kas pabeigta pirms citas pagātnes darbības: had started.", explanation_ru:"Past Perfect для действия, завершённого до другого действия в прошлом: had started." },

  { id:"g06", block:"grammar", level:"A2",
    question:"I haven't seen him ___ last summer.",
    options:["for","since","from","during"], correct:1,
    explanation_lv:"'Since' lieto ar konkrētu laika punktu (last summer).", explanation_ru:"'Since' используется с конкретной точкой во времени (last summer)." },

  { id:"g07", block:"grammar", level:"B1",
    question:"The report ___ by the manager before it is sent out.",
    options:["checks","is checking","is checked","checked"], correct:2,
    explanation_lv:"Ciešamā kārta, tagadne: is/are + past participle.", explanation_ru:"Пассивный залог, настоящее время: is/are + past participle." },

  { id:"g08", block:"grammar", level:"A2",
    question:"You ___ smoke in this building ——— it's strictly forbidden.",
    options:["don't have to","mustn't","shouldn't maybe","needn't"], correct:1,
    explanation_lv:"'Mustn't' izsaka stingru aizliegumu (nav atļauts).", explanation_ru:"'Mustn't' выражает строгий запрет (не разрешено)." },

  { id:"g09", block:"grammar", level:"B1",
    question:"She suggested ___ to the cinema instead of staying home.",
    options:["to go","going","go","went"], correct:1,
    explanation_lv:"Pēc 'suggest' lieto gerundiju (-ing forma): suggested going.", explanation_ru:"После 'suggest' используется герундий (-ing форма): suggested going." },

  { id:"g10", block:"grammar", level:"B2",
    question:"___ the heavy rain, the match continued as planned.",
    options:["Although","Despite","However","Because"], correct:1,
    explanation_lv:"Pēc 'despite' lieto lietvārda frāzi, nevis teikumu: despite the heavy rain.", explanation_ru:"После 'despite' используется именная группа, а не придаточное: despite the heavy rain." },

  { id:"g11", block:"grammar", level:"A2",
    question:"There ___ a lot of people at the party last night.",
    options:["was","were","is","has been"], correct:1,
    explanation_lv:"'A lot of people' ir daudzskaitlis, tāpēc lieto 'were'.", explanation_ru:"'A lot of people' — множественное число, поэтому используется 'were'." },

  { id:"g12", block:"grammar", level:"B1",
    question:"I wish I ___ how to swim when I was a child.",
    options:["learned","had learned","would learn","learn"], correct:1,
    explanation_lv:"'Wish' + past perfect izsaka nožēlu par pagātni.", explanation_ru:"'Wish' + past perfect выражает сожаление о прошлом." },

  { id:"g13", block:"grammar", level:"A2",
    question:"Can you tell me where ___?",
    options:["is the station","the station is","does the station is","the station does"], correct:1,
    explanation_lv:"Netiešs jautājums: parastā vārdu secība (subjekts + darbības vārds), bez inversijas.", explanation_ru:"Косвенный вопрос: обычный порядок слов (подлежащее + сказуемое), без инверсии." },

  { id:"g14", block:"grammar", level:"B2",
    question:"Not only ___ late, but she also forgot the documents.",
    options:["she was","was she","she has been","has she been"], correct:1,
    explanation_lv:"Pēc noliedzoša apstākļa vārda teikuma sākumā nepieciešama subjekta-darbības vārda inversija: 'was she'.", explanation_ru:"После отрицательного наречия в начале предложения нужна инверсия подлежащего и сказуемого: 'was she'." },

  { id:"g15", block:"grammar", level:"A2",
    question:"My brother is ___ than me, but I'm taller.",
    options:["old","older","oldest","more old"], correct:1,
    explanation_lv:"Īsa īpašības vārda komparatīvs: old → older.", explanation_ru:"Сравнительная степень короткого прилагательного: old → older." },

  { id:"g16", block:"grammar", level:"B1",
    question:"The house ___ we visited last week is now for sale.",
    options:["who","which","whose","what"], correct:1,
    explanation_lv:"'Which' lieto priekšmetiem (the house) noteicošajā palīgteikumā.", explanation_ru:"'Which' используется для предметов (the house) в определительном придаточном." },

  { id:"g17", block:"grammar", level:"B2",
    question:"Had I known about the traffic, I ___ earlier.",
    options:["would leave","would have left","will leave","left"], correct:1,
    explanation_lv:"Trešā kondicionāļa inversijas forma: Had + subject..., would have + past participle.", explanation_ru:"Инвертированная форма третьего условного: Had + subject..., would have + past participle." },

  { id:"g18", block:"grammar", level:"A2",
    question:"We ___ to Spain twice this year already.",
    options:["went","have been","were","are going"], correct:1,
    explanation_lv:"Present Perfect pieredzei ar rezultātu, kas aktuāls tagad: have been.", explanation_ru:"Present Perfect для опыта с результатом, актуальным сейчас: have been." },

  { id:"g19", block:"grammar", level:"B1",
    question:"It's important that everyone ___ the safety rules.",
    options:["follows","follow","followed","following"], correct:1,
    explanation_lv:"Konjunktīvs pēc 'important that': pamatforma bez -s, pat 3.pers.", explanation_ru:"Сослагательное наклонение после 'important that': базовая форма без -s, даже для 3-го лица." },

  { id:"g20", block:"grammar", level:"A2",
    question:"I'm looking forward ___ you again soon.",
    options:["to see","seeing","to seeing","see"], correct:2,
    explanation_lv:"Pēc 'look forward to' lieto gerundiju: to seeing.", explanation_ru:"После 'look forward to' используется герундий: to seeing." },

  { id:"g21", block:"grammar", level:"B1",
    question:"He apologised ___ being late for the interview.",
    options:["for","to","about","of"], correct:0,
    explanation_lv:"'Apologise for' + gerundijs ir pareizais modelis.", explanation_ru:"'Apologise for' + герундий — правильная модель." },

  { id:"g22", block:"grammar", level:"B2",
    question:"Rarely ___ such a beautiful sunset.",
    options:["I have seen","have I seen","I saw","did I saw"], correct:1,
    explanation_lv:"Pēc 'rarely' teikuma sākumā nepieciešama inversija: have I seen.", explanation_ru:"После 'rarely' в начале предложения нужна инверсия: have I seen." },

  { id:"g23", block:"grammar", level:"A2",
    question:"This exercise is ___ difficult for beginners.",
    options:["too","enough","very much","so much"], correct:0,
    explanation_lv:"'Too' + īpašības vārds nozīmē 'vairāk nekā pieņemams/iespējams'.", explanation_ru:"'Too' + прилагательное означает 'больше, чем приемлемо/возможно'." },

  { id:"g24", block:"grammar", level:"B1",
    question:"The company's profits have ___ significantly over the past year.",
    options:["raised","risen","rose","raising"], correct:1,
    explanation_lv:"'Rise' (neparejošs, bez objekta) — pagātnes divdabis ir 'risen'.", explanation_ru:"'Rise' (непереходный, без объекта) — причастие прошедшего времени 'risen'." },

  { id:"g25", block:"grammar", level:"A2",
    question:"___ you help me carry these bags, please?",
    options:["Would","Do","Are","Have"], correct:0,
    explanation_lv:"'Would you...' ir izplatīta pieklājīga lūguma forma.", explanation_ru:"'Would you...' — распространённая вежливая форма просьбы." },

  { id:"g26", block:"grammar", level:"B2",
    question:"She acted as ___ nothing had happened.",
    options:["if","though","if though","as if"], correct:3,
    explanation_lv:"'As if' ir pareizais fiksētais izteiciens ar nozīmi 'tā, it kā'.", explanation_ru:"'As if' — правильное устойчивое выражение со значением 'как будто'." },

  { id:"g27", block:"grammar", level:"B1",
    question:"I'd rather you ___ smoke in here.",
    options:["don't","didn't","won't","not"], correct:1,
    explanation_lv:"'I'd rather you + past simple' izsaka vēlmi par kāda cita rīcību.", explanation_ru:"'I'd rather you + past simple' выражает предпочтение по поводу чужого действия." },

  { id:"g28", block:"grammar", level:"A2",
    question:"Neither of the answers ___ correct.",
    options:["are","is","were","being"], correct:1,
    explanation_lv:"'Neither' gramatiski ir vienskaitlis, tāpēc lieto 'is'.", explanation_ru:"'Neither' грамматически единственное число, поэтому используется 'is'." },

  { id:"g29", block:"grammar", level:"B2",
    question:"The sooner you start, ___ you'll finish.",
    options:["sooner","the sooner","soonest","the soonest"], correct:1,
    explanation_lv:"'The + comparative..., the + comparative' ir fiksēta struktūra.", explanation_ru:"'The + comparative..., the + comparative' — устойчивая конструкция." },

  { id:"g30", block:"grammar", level:"B1",
    question:"This medicine should ___ taken with food.",
    options:["be","to be","been","being"], correct:0,
    explanation_lv:"Modālais darbības vārds + ciešamā kārta: should be + past participle.", explanation_ru:"Модальный глагол + пассив: should be + past participle." },

  { id:"g31", block:"grammar", level:"A2",
    question:"He's the man ___ car was stolen last week.",
    options:["who","which","whose","that"], correct:2,
    explanation_lv:"'Whose' norāda piederību noteicošajā palīgteikumā (his car).", explanation_ru:"'Whose' указывает на принадлежность в определительном придаточном (his car)." },

  { id:"g32", block:"grammar", level:"B2",
    question:"No sooner ___ home than it started raining.",
    options:["I got","had I got","I had got","got I"], correct:1,
    explanation_lv:"'No sooner' teikuma sākumā prasa inversiju + past perfect: had I got.", explanation_ru:"'No sooner' в начале предложения требует инверсии + past perfect: had I got." },

  { id:"g33", block:"grammar", level:"B1",
    question:"They've been married ___ ten years now.",
    options:["since","for","during","from"], correct:1,
    explanation_lv:"'For' lieto ar laika periodu/ilgumu (ten years).", explanation_ru:"'For' используется с периодом/длительностью времени (ten years)." },

  // ————————————————— READING (grouped by passage) —————————————————

  {
    id:"r01", block:"reading",
    passage:"Maria had never tried rock climbing before, but her friends convinced her to join them for a weekend trip. She was nervous at first, especially looking up at the tall wall, but the instructor was patient and explained everything clearly. By the end of the day, Maria had climbed three different routes and was already planning her next trip.",
    question:"How did Maria feel at the beginning of the activity?",
    options:["Confident and excited","Nervous","Bored","Angry with her friends"], correct:1,
    explanation_lv:"Tekstā teikts: 'She was nervous at first, especially looking up at the tall wall.'", explanation_ru:"В тексте сказано: 'She was nervous at first, especially looking up at the tall wall.'"
  },
  {
    id:"r02", block:"reading",
    passage:"Maria had never tried rock climbing before, but her friends convinced her to join them for a weekend trip. She was nervous at first, especially looking up at the tall wall, but the instructor was patient and explained everything clearly. By the end of the day, Maria had climbed three different routes and was already planning her next trip.",
    question:"What can we conclude about Maria's overall experience?",
    options:["She regretted going","She wants to try it again","She got injured","She gave up halfway"], correct:1,
    explanation_lv:"Tekstā teikts, ka viņa 'already planning her next trip' — tas parāda, ka tas viņai patika.", explanation_ru:"В тексте сказано, что она 'already planning her next trip' — это показывает, что ей понравилось."
  },

  {
    id:"r03", block:"reading",
    passage:"The local library recently introduced a new system where visitors can borrow tools instead of just books ——— everything from drills to garden equipment. The idea came from a survey showing that many residents only needed certain tools once or twice a year, making it impractical to buy them. Since the launch, over 300 items have been borrowed, and the library plans to expand the collection.",
    question:"Why did the library start this new service?",
    options:["To save money on books","Because a survey showed a need for occasional tool use","Because tools are cheaper than books","To compete with local hardware stores"], correct:1,
    explanation_lv:"Tekstā teikts, ka ideja radās no aptaujas, kas parādīja, ka iedzīvotājiem instrumenti vajadzīgi reti.", explanation_ru:"В тексте сказано, что идея возникла из опроса, показавшего, что жителям инструменты нужны редко."
  },
  {
    id:"r04", block:"reading",
    passage:"The local library recently introduced a new system where visitors can borrow tools instead of just books ——— everything from drills to garden equipment. The idea came from a survey showing that many residents only needed certain tools once or twice a year, making it impractical to buy them. Since the launch, over 300 items have been borrowed, and the library plans to expand the collection.",
    question:"What does 'impractical' most likely mean in this context?",
    options:["Very expensive","Not sensible or reasonable","Illegal","Extremely popular"], correct:1,
    explanation_lv:"'Impractical' nozīmē nesaprātīgs vai nevērtīgs praksē — reti lietotu instrumentu pirkšana nav saprātīga izvēle.", explanation_ru:"'Impractical' означает нецелесообразный на практике — покупать редко используемые инструменты нерационально."
  },
  {
    id:"r05", block:"reading",
    passage:"The local library recently introduced a new system where visitors can borrow tools instead of just books ——— everything from drills to garden equipment. The idea came from a survey showing that many residents only needed certain tools once or twice a year, making it impractical to buy them. Since the launch, over 300 items have been borrowed, and the library plans to expand the collection.",
    question:"What are the library's plans for the future, according to the text?",
    options:["To stop the tool-lending program","To only lend books again","To expand the tool collection","To charge a fee for tools"], correct:2,
    explanation_lv:"Teksts beidzas ar: 'the library plans to expand the collection.'", explanation_ru:"Текст заканчивается словами: 'the library plans to expand the collection.'"
  },

  {
    id:"r06", block:"reading",
    passage:"When Tomas started working from home, he assumed it would give him more free time. Instead, he found himself checking emails late at night and struggling to separate work from personal life. After a few stressful months, he decided to set strict working hours and turn off notifications after 6pm. The change made a noticeable difference to his mood and energy levels.",
    question:"What problem did Tomas face when he began working from home?",
    options:["He had too much free time","He couldn't find a quiet place to work","He struggled to separate work and personal life","His internet connection was too slow"], correct:2,
    explanation_lv:"Tekstā teikts, ka viņš 'struggling to separate work from personal life'.", explanation_ru:"В тексте сказано, что он 'struggling to separate work from personal life'."
  },
  {
    id:"r07", block:"reading",
    passage:"When Tomas started working from home, he assumed it would give him more free time. Instead, he found himself checking emails late at night and struggling to separate work from personal life. After a few stressful months, he decided to set strict working hours and turn off notifications after 6pm. The change made a noticeable difference to his mood and energy levels.",
    question:"What solution did Tomas find for the problem?",
    options:["He quit his job","He set working hours and turned off notifications","He hired an assistant","He moved back to the office"], correct:1,
    explanation_lv:"Tekstā teikts: 'he decided to set strict working hours and turn off notifications after 6pm.'", explanation_ru:"В тексте сказано: 'he decided to set strict working hours and turn off notifications after 6pm.'"
  },

  {
    id:"r08", block:"reading",
    passage:"Many people believe that eating late at night is unhealthy, but recent research suggests the timing itself matters less than what and how much is eaten. A small, balanced snack before bed is unlikely to cause harm, while a large, heavy meal ——— regardless of the hour ——— can disrupt sleep and digestion. Nutritionists now recommend focusing on portion size and food choice rather than strict eating schedules.",
    question:"According to the text, what actually matters more than eating time?",
    options:["The exact hour of eating","What and how much is eaten","How fast a person eats","Where the food is eaten"], correct:1,
    explanation_lv:"Tekstā teikts, ka 'the timing itself matters less than what and how much is eaten.'", explanation_ru:"В тексте сказано, что 'the timing itself matters less than what and how much is eaten.'"
  },
  {
    id:"r09", block:"reading",
    passage:"Many people believe that eating late at night is unhealthy, but recent research suggests the timing itself matters less than what and how much is eaten. A small, balanced snack before bed is unlikely to cause harm, while a large, heavy meal ——— regardless of the hour ——— can disrupt sleep and digestion. Nutritionists now recommend focusing on portion size and food choice rather than strict eating schedules.",
    question:"What do nutritionists now recommend, according to the passage?",
    options:["Never eating after 6pm","Focusing on portion size and food choice","Eating only small meals all day","Avoiding snacks completely"], correct:1,
    explanation_lv:"Tekstā teikts, ka uzturspeciālisti 'recommend focusing on portion size and food choice rather than strict eating schedules.'", explanation_ru:"В тексте сказано, что диетологи 'recommend focusing on portion size and food choice rather than strict eating schedules.'"
  },

  {
    id:"r10", block:"reading",
    passage:"A small coastal town recently banned single-use plastic bags in all shops, following a campaign led by local schoolchildren. Shop owners were initially worried about the cost of alternatives, but many now report that customers have adapted quickly, often bringing their own reusable bags. The town council is now considering similar rules for plastic cutlery.",
    question:"Who started the campaign that led to the ban?",
    options:["The town council","Shop owners","Local schoolchildren","Tourists"], correct:2,
    explanation_lv:"Tekstā teikts, ka aizliegums sekoja 'a campaign led by local schoolchildren.'", explanation_ru:"В тексте сказано, что запрет последовал за 'a campaign led by local schoolchildren.'"
  },
  {
    id:"r11", block:"reading",
    passage:"A small coastal town recently banned single-use plastic bags in all shops, following a campaign led by local schoolchildren. Shop owners were initially worried about the cost of alternatives, but many now report that customers have adapted quickly, often bringing their own reusable bags. The town council is now considering similar rules for plastic cutlery.",
    question:"How have customers reacted to the ban, according to the text?",
    options:["They have complained loudly","They have adapted quickly","They have stopped shopping in the town","They have ignored the new rule"], correct:1,
    explanation_lv:"Tekstā teikts, ka 'customers have adapted quickly, often bringing their own reusable bags.'", explanation_ru:"В тексте сказано, что 'customers have adapted quickly, often bringing their own reusable bags.'"
  },
  {
    id:"r12", block:"reading",
    passage:"A small coastal town recently banned single-use plastic bags in all shops, following a campaign led by local schoolchildren. Shop owners were initially worried about the cost of alternatives, but many now report that customers have adapted quickly, often bringing their own reusable bags. The town council is now considering similar rules for plastic cutlery.",
    question:"What might happen next, according to the passage?",
    options:["The ban on bags will be cancelled","Plastic cutlery may also be banned","Shops will close down","Schoolchildren will stop campaigning"], correct:1,
    explanation_lv:"Tekstā teikts, ka dome 'is now considering similar rules for plastic cutlery.'", explanation_ru:"В тексте сказано, что совет 'is now considering similar rules for plastic cutlery.'"
  },

  {
    id:"r13", block:"reading",
    passage:"Learning a musical instrument as an adult is often seen as difficult, but experts say the biggest obstacle isn't age ——— it's inconsistent practice. Children may seem to learn faster simply because they usually practise more regularly and have fewer distractions. Adults who commit to short, daily practice sessions often make steady progress, regardless of when they started.",
    question:"According to experts, what is the real obstacle to learning an instrument as an adult?",
    options:["Being too old","Inconsistent practice","Lack of talent","Expensive lessons"], correct:1,
    explanation_lv:"Tekstā teikts: 'the biggest obstacle isn't age — it's inconsistent practice.'", explanation_ru:"В тексте сказано: 'the biggest obstacle isn't age — it's inconsistent practice.'"
  },
  {
    id:"r14", block:"reading",
    passage:"Learning a musical instrument as an adult is often seen as difficult, but experts say the biggest obstacle isn't age ——— it's inconsistent practice. Children may seem to learn faster simply because they usually practise more regularly and have fewer distractions. Adults who commit to short, daily practice sessions often make steady progress, regardless of when they started.",
    question:"What helps adults make steady progress, according to the text?",
    options:["Taking a break for a few months","Short, daily practice sessions","Only practising on weekends","Watching video tutorials only"], correct:1,
    explanation_lv:"Tekstā teikts, ka pieaugušie, 'who commit to short, daily practice sessions often make steady progress.'", explanation_ru:"В тексте сказано, что взрослые, 'who commit to short, daily practice sessions often make steady progress.'"
  },

  {
    id:"r15", block:"reading",
    passage:"After moving to a new city for work, Elena struggled to make friends outside her office. She eventually joined a local hiking group she found online, expecting just a way to exercise. Within a few months, she had a small circle of close friends and had explored trails she never would have found alone.",
    question:"Why did Elena join the hiking group?",
    options:["To find a new job","Mainly as a way to exercise","To meet her future business partner","Because her office required it"], correct:1,
    explanation_lv:"Tekstā teikts, ka viņa pievienojās, 'expecting just a way to exercise.'", explanation_ru:"В тексте сказано, что она присоединилась, 'expecting just a way to exercise.'"
  },
  {
    id:"r16", block:"reading",
    passage:"After moving to a new city for work, Elena struggled to make friends outside her office. She eventually joined a local hiking group she found online, expecting just a way to exercise. Within a few months, she had a small circle of close friends and had explored trails she never would have found alone.",
    question:"What was an unexpected benefit for Elena, according to the text?",
    options:["She lost her job","She gained close friends","She stopped exercising","She moved again"], correct:1,
    explanation_lv:"Tekstā teikts: 'she had a small circle of close friends' — tas bija vairāk, nekā viņa gaidīja.", explanation_ru:"В тексте сказано: 'she had a small circle of close friends' — это было больше, чем она ожидала."
  },
  {
    id:"r17", block:"reading",
    passage:"After moving to a new city for work, Elena struggled to make friends outside her office. She eventually joined a local hiking group she found online, expecting just a way to exercise. Within a few months, she had a small circle of close friends and had explored trails she never would have found alone.",
    question:"What does 'she never would have found alone' suggest about the trails?",
    options:["They were dangerous","The group helped her discover new places","She got lost frequently","She preferred hiking by herself"], correct:1,
    explanation_lv:"Šī frāze liecina, ka grupa deva viņai piekļuvi takām/vietām, kuras viņa pati nebūtu atklājusi.", explanation_ru:"Эта фраза говорит о том, что группа дала ей доступ к тропам/местам, которые она сама бы не открыла."
  }
];
