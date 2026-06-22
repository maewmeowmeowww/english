(() => {
  const negativeLessons = [
    {
      title: "ประโยคปฏิเสธของ am / is / are",
      body: `
        <p>ใส่ <strong>not</strong> หลัง am, is, are ทันที</p>
        <div class="lesson-example"><span>He is a student.</span><strong>He is not a student.</strong></div>
        <div class="lesson-example"><span>I am a boy.</span><strong>I am not a boy.</strong></div>
        <p><strong>is not</strong> เขียนเป็น <strong>isn't</strong> ได้ และ <strong>are not</strong> เขียนเป็น <strong>aren't</strong> ได้</p>
        <div class="lesson-example"><span>He isn't a student.</span><span>You aren't beautiful.</span></div>
      `
    },
    {
      title: "ประโยคปฏิเสธของคำกริยาทั่วไป",
      body: `
        <p>ใส่ <strong>do not</strong> หรือ <strong>does not</strong> หน้าคำกริยา</p>
        <p>การเลือก do / does ใช้กฎเดียวกับการเติม s ในคำกริยาทั่วไป</p>
        <p>เมื่อใช้ <strong>does</strong> คำกริยาจะไม่เติม s/es</p>
        <p><strong>do not</strong> เขียนเป็น <strong>don't</strong> ได้ และ <strong>does not</strong> เขียนเป็น <strong>doesn't</strong> ได้</p>
        <div class="lesson-example"><span>He plays a guitar.</span><strong>He doesn't play a guitar.</strong></div>
        <div class="lesson-example"><span>They go to school.</span><strong>They don't go to school.</strong></div>
      `
    },
    {
      title: "แบบฝึกประโยคปฏิเสธ",
      body: "<p>หน้าถัดไปเป็นแบบฝึกเปลี่ยนประโยคให้เป็นประโยคปฏิเสธ</p>"
    }
  ];

  const questionLessons = [
    {
      title: "ประโยคคำถามของ am / is / are",
      body: `
        <p>สลับตำแหน่งประธานกับ am, is, are แล้วใส่ <strong>?</strong> ท้ายประโยค</p>
        <div class="lesson-example"><span>He is a student.</span><strong>Is he a student?</strong></div>
        <p>ตอบได้ว่า <strong>Yes, he is.</strong> หรือ <strong>No, he isn't.</strong></p>
      `
    },
    {
      title: "ประโยคคำถามของคำกริยาทั่วไป",
      body: `
        <p>ใส่ <strong>Do</strong> หรือ <strong>Does</strong> ไว้หน้าประโยค แล้วใส่ <strong>?</strong> ท้ายประโยค</p>
        <p>ถ้าใช้ <strong>Does</strong> คำกริยาจะไม่เติม s/es</p>
        <div class="lesson-example"><span>You go to the hospital.</span><strong>Do you go to the hospital?</strong></div>
        <div class="lesson-example"><span>She sleeps at 9pm.</span><strong>Does she sleep at 9pm?</strong></div>
      `
    },
    {
      title: "แบบฝึกประโยคคำถาม",
      body: "<p>หน้าถัดไปเป็นแบบฝึกเขียนประโยคคำถามพร้อมคำตอบ Yes / No</p>"
    }
  ];

  const negativeExercises = [
    { th: "เปลี่ยนเป็นประโยคปฏิเสธ: He is a student.", answers: ["He is not a student.", "He isn't a student."] },
    { th: "เปลี่ยนเป็นประโยคปฏิเสธ: I am a boy.", answers: ["I am not a boy.", "I'm not a boy."] },
    { th: "เปลี่ยนเป็นประโยคปฏิเสธ: You are beautiful.", answers: ["You are not beautiful.", "You aren't beautiful.", "You're not beautiful."] },
    { th: "เปลี่ยนเป็นประโยคปฏิเสธ: Fang cooks pork.", answers: ["Fang does not cook pork.", "Fang doesn't cook pork."] },
    { th: "เปลี่ยนเป็นประโยคปฏิเสธ: First likes juice.", answers: ["First does not like juice.", "First doesn't like juice."] },
    { th: "เปลี่ยนเป็นประโยคปฏิเสธ: They go to school.", answers: ["They do not go to school.", "They don't go to school."] },
    { th: "เปลี่ยนเป็นประโยคปฏิเสธ: I eat rice.", answers: ["I do not eat rice.", "I don't eat rice."] },
    { th: "เปลี่ยนเป็นประโยคปฏิเสธ: She rides a bicycle.", answers: ["She does not ride a bicycle.", "She doesn't ride a bicycle."] }
  ];

  const questionExercises = [
    { th: "เปลี่ยนเป็นประโยคคำถาม และตอบ Yes: He is a student.", answers: ["Is he a student? Yes, he is."] },
    { th: "เปลี่ยนเป็นประโยคคำถาม และตอบ No: You are beautiful.", answers: ["Are you beautiful? No, I am not.", "Are you beautiful? No, I'm not."] },
    { th: "เปลี่ยนเป็นประโยคคำถาม และตอบ Yes: Fang is a teacher.", answers: ["Is Fang a teacher? Yes, she is.", "Is Fang a teacher? Yes, Fang is."] },
    { th: "เปลี่ยนเป็นประโยคคำถาม และตอบ No: First likes juice.", answers: ["Does First like juice? No, he doesn't.", "Does First like juice? No, First doesn't.", "Does First like juice? No, he does not."] },
    { th: "เปลี่ยนเป็นประโยคคำถาม และตอบ Yes: They go to school.", answers: ["Do they go to school? Yes, they do."] },
    { th: "เปลี่ยนเป็นประโยคคำถาม และตอบ No: She rides a bicycle.", answers: ["Does she ride a bicycle? No, she doesn't.", "Does she ride a bicycle? No, she does not."] },
    { th: "เปลี่ยนเป็นประโยคคำถาม และตอบ Yes: You drink water.", answers: ["Do you drink water? Yes, I do."] },
    { th: "เปลี่ยนเป็นประโยคคำถาม และตอบ No: This looks old.", answers: ["Does this look old? No, it doesn't.", "Does this look old? No, this doesn't.", "Does this look old? No, it does not."] }
  ];

  function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
  }

  function normalize(sentence) {
    return sentence
      .trim()
      .toLowerCase()
      .replace(/[’]/g, "'")
      .replace(/\s+\./g, ".")
      .replace(/\s+\?/g, "?")
      .replace(/\s+/g, " ");
  }

  function showPage(pageId) {
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.toggle("active", page.id === pageId);
    });
    window.location.hash = pageId === "homePage" ? "" : pageId.replace("Page", "");
  }

  function clone(selector) {
    document.querySelectorAll(selector).forEach((node) => {
      const fresh = node.cloneNode(true);
      node.replaceWith(fresh);
    });
  }

  function setup(options) {
    let lessonIndex = 0;
    let queue = [];
    let index = 0;
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
      showLesson();
    }

    function start() {
      queue = shuffle(options.exercises).slice(0, 5);
      index = 0;
      options.lessonCard.classList.add("hidden");
      options.practiceCard.classList.remove("hidden");
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
      const isCorrect = current.answers.map(normalize).includes(normalize(options.answer.value));
      options.feedback.className = `grammar-feedback ${isCorrect ? "correct" : "wrong"}`;
      options.feedback.textContent = isCorrect ? `ถูกต้อง: ${current.answers[0]}` : "ยังไม่ถูก ลองอีกครั้ง";
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

    options.lessonNext.addEventListener("click", () => {
      if (lessonIndex === options.lessons.length - 1) {
        start();
        return;
      }
      lessonIndex += 1;
      showLesson();
    });
    options.form.addEventListener("submit", submit);
    options.next.addEventListener("click", () => {
      index += 1;
      render();
    });
    options.restart.addEventListener("click", start);
    return { intro };
  }

  clone('[data-page="negativePage"], [data-page="questionPage"], #nextNegativeLessonButton, #negativePracticeForm, #nextNegativePracticeButton, #restartNegativePracticeButton, #nextQuestionLessonButton, #questionPracticeForm, #nextQuestionPracticeButton, #restartQuestionPracticeButton');

  const negative = setup({
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

  const question = setup({
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

  document.querySelectorAll('[data-page="negativePage"]').forEach((button) => {
    button.addEventListener("click", () => {
      showPage("negativePage");
      negative.intro();
    });
  });

  document.querySelectorAll('[data-page="questionPage"]').forEach((button) => {
    button.addEventListener("click", () => {
      showPage("questionPage");
      question.intro();
    });
  });
})();
