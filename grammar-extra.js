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

  const negativeLessons = [
    {
      title: "am / is / are の否定文",
      body: `
        <p>am, is, are の直後に <strong>not</strong> を入れる。</p>
        <div class="lesson-example"><span>He is a student.</span><strong>He is not a student.</strong></div>
        <div class="lesson-example"><span>I am a boy.</span><strong>I am not a boy.</strong></div>
        <p><strong>is not</strong> は <strong>isn't</strong>、<strong>are not</strong> は <strong>aren't</strong> と書いてもよい。</p>
        <div class="lesson-example"><span>He isn't a student.</span><span>You aren't beautiful.</span></div>
      `
    },
    {
      title: "一般動詞の否定文",
      body: `
        <p>動詞の前に <strong>do not</strong> または <strong>does not</strong> を入れる。</p>
        <p>do / does の選び方は、一般動詞で s をつけるルールと同じ。</p>
        <p><strong>does</strong> を使うと、動詞の s/es は消える。</p>
        <p><strong>do not</strong> は <strong>don't</strong>、<strong>does not</strong> は <strong>doesn't</strong> と書いてもよい。</p>
        <div class="lesson-example"><span>He plays a guitar.</span><strong>He doesn't play a guitar.</strong></div>
        <div class="lesson-example"><span>They go to school.</span><strong>They don't go to school.</strong></div>
      `
    },
    {
      title: "否定文の問題",
      body: "<p>次のページから、文を否定文に書き換える練習をします。</p>"
    }
  ];

  const negativeExercises = [
    { th: "否定文にする: He is a student.", answers: ["He is not a student.", "He isn't a student."] },
    { th: "否定文にする: I am a boy.", answers: ["I am not a boy.", "I'm not a boy."] },
    { th: "否定文にする: You are beautiful.", answers: ["You are not beautiful.", "You aren't beautiful.", "You're not beautiful."] },
    { th: "否定文にする: Fang cooks pork.", answers: ["Fang does not cook pork.", "Fang doesn't cook pork."] },
    { th: "否定文にする: First likes juice.", answers: ["First does not like juice.", "First doesn't like juice."] },
    { th: "否定文にする: They go to school.", answers: ["They do not go to school.", "They don't go to school."] },
    { th: "否定文にする: I eat rice.", answers: ["I do not eat rice.", "I don't eat rice."] },
    { th: "否定文にする: She rides a bicycle.", answers: ["She does not ride a bicycle.", "She doesn't ride a bicycle."] }
  ];

  const questionLessons = [
    {
      title: "am / is / are の疑問文",
      body: `
        <p>主語と am, is, are を入れ替えて、最後に <strong>?</strong> をつける。</p>
        <div class="lesson-example"><span>He is a student.</span><strong>Is he a student?</strong></div>
        <p>答え方は <strong>Yes, he is.</strong> または <strong>No, he isn't.</strong></p>
      `
    },
    {
      title: "一般動詞の疑問文",
      body: `
        <p>文の最初に <strong>Do</strong> または <strong>Does</strong> を置いて、最後に <strong>?</strong> をつける。</p>
        <p><strong>Does</strong> の場合、動詞の s/es はなくなるので注意。</p>
        <div class="lesson-example"><span>You go to the hospital.</span><strong>Do you go to the hospital?</strong></div>
        <div class="lesson-example"><span>She sleeps at 9pm.</span><strong>Does she sleep at 9pm?</strong></div>
      `
    },
    {
      title: "疑問文の問題",
      body: "<p>次のページから、疑問文と Yes / No の答え方をセットで練習します。</p>"
    }
  ];

  const questionExercises = [
    { th: "疑問文にして、Yesで答える: He is a student.", answers: ["Is he a student? Yes, he is."] },
    { th: "疑問文にして、Noで答える: You are beautiful.", answers: ["Are you beautiful? No, I am not.", "Are you beautiful? No, I'm not."] },
    { th: "疑問文にして、Yesで答える: Fang is a teacher.", answers: ["Is Fang a teacher? Yes, she is.", "Is Fang a teacher? Yes, Fang is."] },
    { th: "疑問文にして、Noで答える: First likes juice.", answers: ["Does First like juice? No, he doesn't.", "Does First like juice? No, First doesn't.", "Does First like juice? No, he does not."] },
    { th: "疑問文にして、Yesで答える: They go to school.", answers: ["Do they go to school? Yes, they do."] },
    { th: "疑問文にして、Noで答える: She rides a bicycle.", answers: ["Does she ride a bicycle? No, she doesn't.", "Does she ride a bicycle? No, she does not."] },
    { th: "疑問文にして、Yesで答える: You drink water.", answers: ["Do you drink water? Yes, I do."] },
    { th: "疑問文にして、Noで答える: This looks old.", answers: ["Does this look old? No, it doesn't.", "Does this look old? No, this doesn't.", "Does this look old? No, it does not."] }
  ];

  const style = document.createElement("style");
  style.textContent = `
    .general-verb-table { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .be-verb-table small { color: var(--muted); font-weight: 750; overflow-wrap: anywhere; }
    .lesson-card { align-content: start; }
    .lesson-body { display: grid; gap: 14px; color: var(--ink); line-height: 1.65; }
    .lesson-body p { margin: 0; }
    .lesson-example { display: grid; gap: 6px; padding: 12px; border: 1px solid var(--line); border-radius: 8px; background: var(--accent-soft); }
    .lesson-example span, .lesson-example strong { overflow-wrap: anywhere; }
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

  function setupLessonPractice(options) {
    let lessonIndex = 0;
    let queue = [];
    let practiceIndex = 0;
    let current = null;

    function showLesson() {
      const lesson = options.lessons[lessonIndex];
      options.lessonCard.classList.remove("hidden");
      options.practiceCard.classList.add("hidden");
      options.lessonLabel.textContent = `${lessonIndex + 1} / ${options.lessons.length}`;
      options.lessonTitle.textContent = lesson.title;
      options.lessonBody.innerHTML = lesson.body;
      options.lessonNext.textContent = lessonIndex === options.lessons.length - 1 ? "เริ่มทำแบบฝึก" : "ถัดไป";
    }

    function intro() {
      lessonIndex = 0;
      current = null;
      showLesson();
    }

    function startPractice() {
      queue = shuffle(options.exercises).slice(0, 5);
      practiceIndex = 0;
      options.lessonCard.classList.add("hidden");
      options.practiceCard.classList.remove("hidden");
      options.complete.classList.add("hidden");
      options.form.classList.remove("hidden");
      options.question.classList.remove("hidden");
      renderPractice();
    }

    function renderPractice() {
      current = queue[practiceIndex];
      options.question.textContent = current.th;
      options.count.textContent = `${practiceIndex + 1} / 5`;
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

      const accepted = current.answers.map(normalizeSentence);
      const isCorrect = accepted.includes(normalizeSentence(options.answer.value));

      options.feedback.className = `grammar-feedback ${isCorrect ? "correct" : "wrong"}`;
      options.feedback.textContent = isCorrect ? `ถูกต้อง: ${current.answers[0]}` : "ยังไม่ถูก ลองอีกครั้ง";

      if (!isCorrect) return;
      options.answer.disabled = true;

      if (practiceIndex === queue.length - 1) {
        options.form.classList.add("hidden");
        options.question.classList.add("hidden");
        options.next.classList.add("hidden");
        options.complete.classList.remove("hidden");
      } else {
        options.next.classList.remove("hidden");
      }
    }

    options.lessonNext.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      if (lessonIndex === options.lessons.length - 1) {
        startPractice();
        return;
      }
      lessonIndex += 1;
      showLesson();
    }, true);

    options.form.addEventListener("submit", submit, true);
    options.next.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      practiceIndex += 1;
      renderPractice();
    }, true);
    options.restart.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      startPractice();
    }, true);

    return { intro, startPractice };
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

  const negativePractice = setupLessonPractice({
    lessons: negativeLessons,
    exercises: negativeExercises,
    lessonCard: document.querySelector("#negativeLessonCard"),
    lessonLabel: document.querySelector("#negativeLessonLabel"),
    lessonTitle: document.querySelector("#negativeLessonTitle"),
    lessonBody: document.querySelector("#negativeLessonBody"),
    lessonNext: document.querySelector("#nextNegativeLessonButton"),
    practiceCard: document.querySelector("#negativePracticeCard"),
    form: document.querySelector("#negativePracticeForm"),
    question: document.querySelector("#negativePracticeQuestion"),
    answer: document.querySelector("#negativePracticeAnswer"),
    feedback: document.querySelector("#negativePracticeFeedback"),
    count: document.querySelector("#negativePracticeCount"),
    next: document.querySelector("#nextNegativePracticeButton"),
    complete: document.querySelector("#negativePracticeComplete"),
    restart: document.querySelector("#restartNegativePracticeButton")
  });

  const questionPractice = setupLessonPractice({
    lessons: questionLessons,
    exercises: questionExercises,
    lessonCard: document.querySelector("#questionLessonCard"),
    lessonLabel: document.querySelector("#questionLessonLabel"),
    lessonTitle: document.querySelector("#questionLessonTitle"),
    lessonBody: document.querySelector("#questionLessonBody"),
    lessonNext: document.querySelector("#nextQuestionLessonButton"),
    practiceCard: document.querySelector("#questionPracticeCard"),
    form: document.querySelector("#questionPracticeForm"),
    question: document.querySelector("#questionPracticeQuestion"),
    answer: document.querySelector("#questionPracticeAnswer"),
    feedback: document.querySelector("#questionPracticeFeedback"),
    count: document.querySelector("#questionPracticeCount"),
    next: document.querySelector("#nextQuestionPracticeButton"),
    complete: document.querySelector("#questionPracticeComplete"),
    restart: document.querySelector("#restartQuestionPracticeButton")
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

  document.querySelectorAll('[data-page="negativePage"]').forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      showPage("negativePage");
      negativePractice.intro();
    }, true);
  });

  document.querySelectorAll('[data-page="questionPage"]').forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      showPage("questionPage");
      questionPractice.intro();
    }, true);
  });

  if (window.location.hash === "#generalVerb") {
    showPage("generalVerbPage");
    generalPractice.intro();
  }

  if (window.location.hash === "#negative") {
    showPage("negativePage");
    negativePractice.intro();
  }

  if (window.location.hash === "#question") {
    showPage("questionPage");
    questionPractice.intro();
  }
})();
