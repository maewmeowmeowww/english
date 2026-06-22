(() => {
  const beVerbExercises = [
    { th: "ฉัน　เป็น　นักเรียน (a student)", answer: "I am a student", alternatives: ["I'm a student"] },
    { th: "คุณ　ใจดี (kind)", answer: "You are kind", alternatives: ["You're kind"] },
    { th: "คุณ　เป็น　ครู (a teacher)", answer: "You are a teacher", alternatives: ["You're a teacher"] },
    { th: "เขา (ผู้ชาย)　สูง (tall)", answer: "He is tall", alternatives: ["He's tall"] },
    { th: "เขา (ผู้ชาย)　เป็น　หมอ (a doctor)", answer: "He is a doctor", alternatives: ["He's a doctor"] },
    { th: "เขา (ผู้หญิง)　สวย (beautiful)", answer: "She is beautiful", alternatives: ["She's beautiful"] },
    { th: "เขา (ผู้หญิง)　เป็น　วิศวกร (an engineer)", answer: "She is an engineer", alternatives: ["She's an engineer"] },
    { th: "มัน　ตัวใหญ่ (big)", answer: "It is big", alternatives: ["It's big"] },
    { th: "มัน　เป็น　สัตว์ (an animal)", answer: "It is an animal", alternatives: ["It's an animal"] },
    { th: "นี่　เป็น　หนังสือ (a book)", answer: "This is a book", alternatives: [] },
    { th: "นั่น　ตัวใหญ่ (big)", answer: "That is big", alternatives: ["That's big"] },
    { th: "First　พร้อม (ready)", answer: "First is ready", alternatives: [] },
    { th: "Fang　เป็น　ครู (a teacher)", answer: "Fang is a teacher", alternatives: [] },
    { th: "พวกเรา　พร้อม (ready)", answer: "We are ready", alternatives: ["We're ready"] },
    { th: "พวกเขา　ยุ่ง (busy)", answer: "They are busy", alternatives: ["They're busy"] },
    { th: "พวกเขา　ใจดี (kind)", answer: "They are kind", alternatives: ["They're kind"] }
  ];

  const generalVerbExercises = [
    { th: "ฉัน　กิน (eat)　ข้าว (rice)", answer: "I eat rice" },
    { th: "คุณ　ดื่ม (drink)　น้ำ (water)", answer: "You drink water" },
    { th: "พวกเรา　ชอบ (like)　มะม่วง (mango)", answer: "We like mango" },
    { th: "พวกเขา　ดื่ม (drink)　น้ำผลไม้ (juice)", answer: "They drink juice" },
    { th: "เขา (ผู้ชาย)　ดื่ม (drink)　นม (milk)", answer: "He drinks milk" },
    { th: "เขา (ผู้หญิง)　ขี่ (ride)　จักรยาน (a bicycle)", answer: "She rides a bicycle" },
    { th: "มัน　วิ่ง (run)", answer: "It runs" },
    { th: "นี่　ดู (look)　เก่า (old)", answer: "This looks old" },
    { th: "นั่น　ดู (look)　ใหม่ (new)", answer: "That looks new" },
    { th: "First　ล้าง (wash)　รถยนต์ (a car)", answer: "First washes a car" },
    { th: "Fang　ทำอาหาร (cook)　หมู (pork)", answer: "Fang cooks pork" },
    { th: "First　ชอบ (like)　น้ำผลไม้ (juice)", answer: "First likes juice" },
    { th: "Fang　ซื้อ (buy)　มะม่วง (a mango)", answer: "Fang buys a mango" }
  ];

  const style = document.createElement("style");
  style.textContent = `
    .general-verb-table { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .be-verb-table small { color: var(--muted); font-weight: 750; overflow-wrap: anywhere; }
    @media (max-width: 560px) {
      .general-verb-table div:nth-child(-n + 2) { border-bottom: 0; }
    }
  `;
  document.head.append(style);

  function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
  }

  function normalizeSentence(sentence) {
    return sentence
      .trim()
      .toLowerCase()
      .replace(/[’]/g, "'")
      .replace(/\s+\./g, ".")
      .replace(/\s+/g, " ");
  }

  function showPage(pageId) {
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.toggle("active", page.id === pageId);
    });
    window.location.hash = pageId === "homePage" ? "" : pageId.replace("Page", "");
  }

  function setupExercise(options) {
    let queue = [];
    let index = 0;
    let current = null;

    function intro() {
      current = null;
      options.intro.classList.remove("hidden");
      options.card.classList.add("hidden");
    }

    function start() {
      queue = shuffle(options.exercises).slice(0, 5);
      index = 0;
      options.intro.classList.add("hidden");
      options.card.classList.remove("hidden");
      options.complete.classList.add("hidden");
      options.form.classList.remove("hidden");
      options.question.classList.remove("hidden");
      render();
    }

    function render() {
      current = queue[index];
      options.question.textContent = current.th;
      options.count.textContent = `${index + 1} / 5`;
      options.answer.value = "";
      options.answer.disabled = false;
      options.feedback.textContent = "";
      options.feedback.className = "grammar-feedback";
      options.next.classList.add("hidden");
      requestAnimationFrame(() => options.answer.focus());
    }

    function submit(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (!current) return;

      const accepted = [current.answer, ...(current.alternatives || [])]
        .map((answer) => normalizeSentence(`${answer}.`));
      const isCorrect = accepted.includes(normalizeSentence(options.answer.value));

      options.feedback.className = `grammar-feedback ${isCorrect ? "correct" : "wrong"}`;
      options.feedback.textContent = isCorrect ? `ถูกต้อง: ${current.answer}.` : "ยังไม่ถูก ลองอีกครั้ง";

      if (!isCorrect) return;
      options.answer.disabled = true;

      if (index === queue.length - 1) {
        options.form.classList.add("hidden");
        options.question.classList.add("hidden");
        options.next.classList.add("hidden");
        options.complete.classList.remove("hidden");
      } else {
        options.next.classList.remove("hidden");
      }
    }

    options.start.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      start();
    }, true);
    options.form.addEventListener("submit", submit, true);
    options.next.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      index += 1;
      render();
    }, true);
    options.restart.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      start();
    }, true);

    return { intro, start };
  }

  const bePractice = setupExercise({
    exercises: beVerbExercises,
    intro: document.querySelector("#beVerbIntro"),
    card: document.querySelector("#grammarCard"),
    start: document.querySelector("#startGrammarButton"),
    form: document.querySelector("#grammarForm"),
    question: document.querySelector("#grammarQuestion"),
    answer: document.querySelector("#grammarAnswer"),
    feedback: document.querySelector("#grammarFeedback"),
    count: document.querySelector("#grammarCount"),
    next: document.querySelector("#nextGrammarButton"),
    complete: document.querySelector("#grammarComplete"),
    restart: document.querySelector("#restartGrammarButton")
  });

  const generalPractice = setupExercise({
    exercises: generalVerbExercises,
    intro: document.querySelector("#generalVerbIntro"),
    card: document.querySelector("#generalVerbCard"),
    start: document.querySelector("#startGeneralVerbButton"),
    form: document.querySelector("#generalVerbForm"),
    question: document.querySelector("#generalVerbQuestion"),
    answer: document.querySelector("#generalVerbAnswer"),
    feedback: document.querySelector("#generalVerbFeedback"),
    count: document.querySelector("#generalVerbCount"),
    next: document.querySelector("#nextGeneralVerbButton"),
    complete: document.querySelector("#generalVerbComplete"),
    restart: document.querySelector("#restartGeneralVerbButton")
  });

  document.querySelectorAll('[data-page="beVerbPage"]').forEach((button) => {
    button.addEventListener("click", () => bePractice.intro(), true);
  });

  document.querySelectorAll('[data-page="generalVerbPage"]').forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      showPage("generalVerbPage");
      generalPractice.intro();
    }, true);
  });

  if (window.location.hash === "#generalVerb") {
    showPage("generalVerbPage");
    generalPractice.intro();
  }
})();
