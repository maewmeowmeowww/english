(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);
  const norm = (text) => text.trim().toLowerCase().replace(/[’]/g, "'").replace(/\s+\./g, ".").replace(/\s+\?/g, "?").replace(/\s+/g, " ");
  const showPage = (id) => {
    $$(".page").forEach((page) => page.classList.toggle("active", page.id === id));
    window.location.hash = id === "homePage" ? "" : id.replace("Page", "");
  };
  const clone = (selector) => $$(selector).forEach((node) => node.replaceWith(node.cloneNode(true)));

  const style = document.createElement("style");
  style.textContent = `.general-verb-table{grid-template-columns:repeat(2,minmax(0,1fr))}.be-verb-table small{color:var(--muted);font-weight:750;overflow-wrap:anywhere}.lesson-card{align-content:start}.lesson-body{display:grid;gap:14px;color:var(--ink);line-height:1.65}.lesson-body p{margin:0}.lesson-example{display:grid;gap:6px;padding:12px;border:1px solid var(--line);border-radius:8px;background:var(--accent-soft)}.lesson-example span,.lesson-example strong{overflow-wrap:anywhere}@media(max-width:560px){.general-verb-table div:nth-child(-n+2){border-bottom:0}}`;
  document.head.append(style);

  const beExercises = [
    ["ฉัน　เป็น　นักเรียน (a student)", "I am a student", ["I'm a student"]],
    ["คุณ　ใจดี (kind)", "You are kind", ["You're kind"]],
    ["คุณ　เป็น　ครู (a teacher)", "You are a teacher", ["You're a teacher"]],
    ["เขา (ผู้ชาย)　สูง (tall)", "He is tall", ["He's tall"]],
    ["เขา (ผู้ชาย)　เป็น　หมอ (a doctor)", "He is a doctor", ["He's a doctor"]],
    ["เขา (ผู้หญิง)　สวย (beautiful)", "She is beautiful", ["She's beautiful"]],
    ["เขา (ผู้หญิง)　เป็น　วิศวกร (an engineer)", "She is an engineer", ["She's an engineer"]],
    ["มัน　ตัวใหญ่ (big)", "It is big", ["It's big"]],
    ["มัน　เป็น　สัตว์ (an animal)", "It is an animal", ["It's an animal"]],
    ["นี่　เป็น　หนังสือ (a book)", "This is a book", []],
    ["นั่น　ตัวใหญ่ (big)", "That is big", ["That's big"]],
    ["First　พร้อม (ready)", "First is ready", []],
    ["Fang　เป็น　ครู (a teacher)", "Fang is a teacher", []],
    ["พวกเรา　พร้อม (ready)", "We are ready", ["We're ready"]],
    ["พวกเขา　ยุ่ง (busy)", "They are busy", ["They're busy"]],
    ["พวกเขา　ใจดี (kind)", "They are kind", ["They're kind"]]
  ].map(([th, answer, alternatives]) => ({ th, answer, alternatives }));

  const generalExercises = [
    ["ฉัน　กิน (eat)　ข้าว (rice)", "I eat rice"],
    ["คุณ　ดื่ม (drink)　น้ำ (water)", "You drink water"],
    ["พวกเรา　ชอบ (like)　มะม่วง (mango)", "We like mango"],
    ["พวกเขา　ดื่ม (drink)　น้ำผลไม้ (juice)", "They drink juice"],
    ["เขา (ผู้ชาย)　ดื่ม (drink)　นม (milk)", "He drinks milk"],
    ["เขา (ผู้หญิง)　ขี่ (ride)　จักรยาน (a bicycle)", "She rides a bicycle"],
    ["มัน　วิ่ง (run)", "It runs"],
    ["นี่　ดู (look)　เก่า (old)", "This looks old"],
    ["นั่น　ดู (look)　ใหม่ (new)", "That looks new"],
    ["First　ล้าง (wash)　รถยนต์ (a car)", "First washes a car"],
    ["Fang　ทำอาหาร (cook)　หมู (pork)", "Fang cooks pork"],
    ["First　ชอบ (like)　น้ำผลไม้ (juice)", "First likes juice"],
    ["Fang　ซื้อ (buy)　มะม่วง (a mango)", "Fang buys a mango"]
  ].map(([th, answer]) => ({ th, answer, alternatives: [] }));

  const negativeLessons = [
    ["ประโยคปฏิเสธของ am / is / are", `<p>ใส่ <strong>not</strong> หลัง am, is, are ทันที</p><div class="lesson-example"><span>He is a student.</span><strong>He is not a student.</strong></div><div class="lesson-example"><span>I am a boy.</span><strong>I am not a boy.</strong></div><p><strong>is not</strong> เขียนเป็น <strong>isn't</strong> ได้ และ <strong>are not</strong> เขียนเป็น <strong>aren't</strong> ได้</p><div class="lesson-example"><span>He isn't a student.</span><span>You aren't beautiful.</span></div>`],
    ["ประโยคปฏิเสธของคำกริยาทั่วไป", `<p>ใส่ <strong>do not</strong> หรือ <strong>does not</strong> หน้าคำกริยา</p><p>การเลือก do / does ใช้กฎเดียวกับการเติม s ในคำกริยาทั่วไป</p><p>เมื่อใช้ <strong>does</strong> คำกริยาจะไม่เติม s/es</p><p><strong>do not</strong> เขียนเป็น <strong>don't</strong> ได้ และ <strong>does not</strong> เขียนเป็น <strong>doesn't</strong> ได้</p><div class="lesson-example"><span>He plays a guitar.</span><strong>He doesn't play a guitar.</strong></div><div class="lesson-example"><span>They go to school.</span><strong>They don't go to school.</strong></div>`],
    ["แบบฝึกประโยคปฏิเสธ", "<p>หน้าถัดไปเป็นแบบฝึกเปลี่ยนประโยคให้เป็นประโยคปฏิเสธ</p>"]
  ].map(([title, body]) => ({ title, body }));

  const questionLessons = [
    ["ประโยคคำถามของ am / is / are", `<p>สลับตำแหน่งประธานกับ am, is, are แล้วใส่ <strong>?</strong> ท้ายประโยค</p><div class="lesson-example"><span>He is a student.</span><strong>Is he a student?</strong></div><p>ตอบได้ว่า <strong>Yes, he is.</strong> หรือ <strong>No, he isn't.</strong></p>`],
    ["ประโยคคำถามของคำกริยาทั่วไป", `<p>ใส่ <strong>Do</strong> หรือ <strong>Does</strong> ไว้หน้าประโยค แล้วใส่ <strong>?</strong> ท้ายประโยค</p><p>ถ้าใช้ <strong>Does</strong> คำกริยาจะไม่เติม s/es</p><div class="lesson-example"><span>You go to the hospital.</span><strong>Do you go to the hospital?</strong></div><div class="lesson-example"><span>She sleeps at 9pm.</span><strong>Does she sleep at 9pm?</strong></div>`],
    ["แบบฝึกประโยคคำถาม", "<p>หน้าถัดไปเป็นแบบฝึกเขียนประโยคคำถามพร้อมคำตอบ Yes / No</p>"]
  ].map(([title, body]) => ({ title, body }));

  const negativeExercises = [
    ["เปลี่ยนเป็นประโยคปฏิเสธ: He is a student.", ["He is not a student.", "He isn't a student."]],
    ["เปลี่ยนเป็นประโยคปฏิเสธ: I am a boy.", ["I am not a boy.", "I'm not a boy."]],
    ["เปลี่ยนเป็นประโยคปฏิเสธ: You are beautiful.", ["You are not beautiful.", "You aren't beautiful.", "You're not beautiful."]],
    ["เปลี่ยนเป็นประโยคปฏิเสธ: Fang cooks pork.", ["Fang does not cook pork.", "Fang doesn't cook pork."]],
    ["เปลี่ยนเป็นประโยคปฏิเสธ: First likes juice.", ["First does not like juice.", "First doesn't like juice."]],
    ["เปลี่ยนเป็นประโยคปฏิเสธ: They go to school.", ["They do not go to school.", "They don't go to school."]],
    ["เปลี่ยนเป็นประโยคปฏิเสธ: I eat rice.", ["I do not eat rice.", "I don't eat rice."]],
    ["เปลี่ยนเป็นประโยคปฏิเสธ: She rides a bicycle.", ["She does not ride a bicycle.", "She doesn't ride a bicycle."]]
  ].map(([th, answers]) => ({ th, answers }));

  const questionExercises = [
    ["เปลี่ยนเป็นประโยคคำถาม และตอบ Yes: He is a student.", ["Is he a student? Yes, he is."]],
    ["เปลี่ยนเป็นประโยคคำถาม และตอบ No: You are beautiful.", ["Are you beautiful? No, I am not.", "Are you beautiful? No, I'm not."]],
    ["เปลี่ยนเป็นประโยคคำถาม และตอบ Yes: Fang is a teacher.", ["Is Fang a teacher? Yes, she is.", "Is Fang a teacher? Yes, Fang is."]],
    ["เปลี่ยนเป็นประโยคคำถาม และตอบ No: First likes juice.", ["Does First like juice? No, he doesn't.", "Does First like juice? No, First doesn't.", "Does First like juice? No, he does not."]],
    ["เปลี่ยนเป็นประโยคคำถาม และตอบ Yes: They go to school.", ["Do they go to school? Yes, they do."]],
    ["เปลี่ยนเป็นประโยคคำถาม และตอบ No: She rides a bicycle.", ["Does she ride a bicycle? No, she doesn't.", "Does she ride a bicycle? No, she does not."]],
    ["เปลี่ยนเป็นประโยคคำถาม และตอบ Yes: You drink water.", ["Do you drink water? Yes, I do."]],
    ["เปลี่ยนเป็นประโยคคำถาม และตอบ No: This looks old.", ["Does this look old? No, it doesn't.", "Does this look old? No, this doesn't.", "Does this look old? No, it does not."]]
  ].map(([th, answers]) => ({ th, answers }));

  function simplePractice(o) {
    let q = [], i = 0, cur = null;
    const intro = () => { o.intro.classList.remove("hidden"); o.card.classList.add("hidden"); };
    const start = () => { q = shuffle(o.exercises).slice(0, 5); i = 0; o.intro.classList.add("hidden"); o.card.classList.remove("hidden"); o.complete.classList.add("hidden"); o.form.classList.remove("hidden"); o.question.classList.remove("hidden"); render(); };
    const render = () => { cur = q[i]; o.question.textContent = cur.th; o.count.textContent = `${i + 1} / 5`; o.answer.value = ""; o.answer.disabled = false; o.feedback.textContent = ""; o.feedback.className = "grammar-feedback"; o.next.classList.add("hidden"); requestAnimationFrame(() => o.answer.focus()); };
    const submit = (e) => { e.preventDefault(); e.stopImmediatePropagation(); const ok = [cur.answer, ...(cur.alternatives || [])].map((a) => norm(`${a}.`)).includes(norm(o.answer.value)); o.feedback.className = `grammar-feedback ${ok ? "correct" : "wrong"}`; o.feedback.textContent = ok ? `ถูกต้อง: ${cur.answer}.` : "ยังไม่ถูก ลองอีกครั้ง"; if (!ok) return; o.answer.disabled = true; if (i === q.length - 1) { o.form.classList.add("hidden"); o.question.classList.add("hidden"); o.next.classList.add("hidden"); o.complete.classList.remove("hidden"); } else { o.next.classList.remove("hidden"); } };
    o.start.addEventListener("click", (e) => { e.stopImmediatePropagation(); start(); }, true); o.form.addEventListener("submit", submit, true); o.next.addEventListener("click", (e) => { e.stopImmediatePropagation(); i += 1; render(); }, true); o.restart.addEventListener("click", (e) => { e.stopImmediatePropagation(); start(); }, true);
    return { intro };
  }

  function lessonPractice(o) {
    let li = 0, q = [], qi = 0, cur = null;
    const showLesson = () => { const l = o.lessons[li]; o.lessonCard.classList.remove("hidden"); o.practiceCard.classList.add("hidden"); o.lessonLabel.textContent = `${li + 1} / ${o.lessons.length}`; o.lessonTitle.textContent = l.title; o.lessonBody.innerHTML = l.body; o.lessonNext.textContent = li === o.lessons.length - 1 ? "เริ่มทำแบบฝึก" : "ถัดไป"; };
    const intro = () => { li = 0; showLesson(); };
    const start = () => { q = shuffle(o.exercises).slice(0, 5); qi = 0; o.lessonCard.classList.add("hidden"); o.practiceCard.classList.remove("hidden"); o.complete.classList.add("hidden"); o.form.classList.remove("hidden"); o.question.classList.remove("hidden"); render(); };
    const render = () => { cur = q[qi]; o.question.textContent = cur.th; o.count.textContent = `${qi + 1} / 5`; o.answer.value = ""; o.answer.disabled = false; o.feedback.textContent = ""; o.feedback.className = "grammar-feedback"; o.next.classList.add("hidden"); requestAnimationFrame(() => o.answer.focus()); };
    const submit = (e) => { e.preventDefault(); e.stopImmediatePropagation(); const ok = cur.answers.map(norm).includes(norm(o.answer.value)); o.feedback.className = `grammar-feedback ${ok ? "correct" : "wrong"}`; o.feedback.textContent = ok ? `ถูกต้อง: ${cur.answers[0]}` : "ยังไม่ถูก ลองอีกครั้ง"; if (!ok) return; o.answer.disabled = true; if (qi === q.length - 1) { o.form.classList.add("hidden"); o.question.classList.add("hidden"); o.next.classList.add("hidden"); o.complete.classList.remove("hidden"); } else { o.next.classList.remove("hidden"); } };
    o.lessonNext.addEventListener("click", (e) => { e.stopImmediatePropagation(); if (li === o.lessons.length - 1) start(); else { li += 1; showLesson(); } }, true); o.form.addEventListener("submit", submit, true); o.next.addEventListener("click", (e) => { e.stopImmediatePropagation(); qi += 1; render(); }, true); o.restart.addEventListener("click", (e) => { e.stopImmediatePropagation(); start(); }, true);
    return { intro };
  }

  clone('[data-page="beVerbPage"],[data-page="generalVerbPage"],[data-page="negativePage"],[data-page="questionPage"],#startGrammarButton,#grammarForm,#nextGrammarButton,#restartGrammarButton,#startGeneralVerbButton,#generalVerbForm,#nextGeneralVerbButton,#restartGeneralVerbButton,#nextNegativeLessonButton,#negativePracticeForm,#nextNegativePracticeButton,#restartNegativePracticeButton,#nextQuestionLessonButton,#questionPracticeForm,#nextQuestionPracticeButton,#restartQuestionPracticeButton');

  const be = simplePractice({ exercises: beExercises, intro: $("#beVerbIntro"), card: $("#grammarCard"), start: $("#startGrammarButton"), form: $("#grammarForm"), question: $("#grammarQuestion"), answer: $("#grammarAnswer"), feedback: $("#grammarFeedback"), count: $("#grammarCount"), next: $("#nextGrammarButton"), complete: $("#grammarComplete"), restart: $("#restartGrammarButton") });
  const general = simplePractice({ exercises: generalExercises, intro: $("#generalVerbIntro"), card: $("#generalVerbCard"), start: $("#startGeneralVerbButton"), form: $("#generalVerbForm"), question: $("#generalVerbQuestion"), answer: $("#generalVerbAnswer"), feedback: $("#generalVerbFeedback"), count: $("#generalVerbCount"), next: $("#nextGeneralVerbButton"), complete: $("#generalVerbComplete"), restart: $("#restartGeneralVerbButton") });
  const negative = lessonPractice({ lessons: negativeLessons, exercises: negativeExercises, lessonCard: $("#negativeLessonCard"), lessonLabel: $("#negativeLessonLabel"), lessonTitle: $("#negativeLessonTitle"), lessonBody: $("#negativeLessonBody"), lessonNext: $("#nextNegativeLessonButton"), practiceCard: $("#negativePracticeCard"), form: $("#negativePracticeForm"), question: $("#negativePracticeQuestion"), answer: $("#negativePracticeAnswer"), feedback: $("#negativePracticeFeedback"), count: $("#negativePracticeCount"), next: $("#nextNegativePracticeButton"), complete: $("#negativePracticeComplete"), restart: $("#restartNegativePracticeButton") });
  const question = lessonPractice({ lessons: questionLessons, exercises: questionExercises, lessonCard: $("#questionLessonCard"), lessonLabel: $("#questionLessonLabel"), lessonTitle: $("#questionLessonTitle"), lessonBody: $("#questionLessonBody"), lessonNext: $("#nextQuestionLessonButton"), practiceCard: $("#questionPracticeCard"), form: $("#questionPracticeForm"), question: $("#questionPracticeQuestion"), answer: $("#questionPracticeAnswer"), feedback: $("#questionPracticeFeedback"), count: $("#questionPracticeCount"), next: $("#nextQuestionPracticeButton"), complete: $("#questionPracticeComplete"), restart: $("#restartQuestionPracticeButton") });

  const openers = { beVerbPage: be, generalVerbPage: general, negativePage: negative, questionPage: question };
  Object.entries(openers).forEach(([page, api]) => $$(`[data-page="${page}"]`).forEach((button) => button.addEventListener("click", () => { showPage(page); api.intro(); })));
})();
