const categories = [
  {
    id: "pronouns",
    title: "คำสรรพนาม",
    note: "คำเรียกคนและสิ่งของ",
    words: [
      { en: "I", th: "ฉัน" },
      { en: "you", th: "คุณ" },
      { en: "he", th: "เขา (ผู้ชาย)" },
      { en: "she", th: "เขา (ผู้หญิง)" },
      { en: "we", th: "พวกเรา" },
      { en: "they", th: "พวกเขา" },
      { en: "it", th: "มัน" },
      { en: "this", th: "สิ่งนี้" },
      { en: "that", th: "สิ่งนั้น" },
      { en: "who", th: "ใคร" },
      { en: "what", th: "อะไร" },
      { en: "when", th: "เมื่อไร" },
      { en: "where", th: "ที่ไหน" },
      { en: "why", th: "ทำไม" },
      { en: "how", th: "อย่างไร" }
    ]
  },
  {
    id: "numbers",
    title: "ตัวเลข",
    note: "การนับจำนวน",
    words: [
      { en: "one", th: "หนึ่ง" },
      { en: "two", th: "สอง" },
      { en: "three", th: "สาม" },
      { en: "four", th: "สี่" },
      { en: "five", th: "ห้า" },
      { en: "six", th: "หก" },
      { en: "seven", th: "เจ็ด" },
      { en: "eight", th: "แปด" },
      { en: "nine", th: "เก้า" },
      { en: "ten", th: "สิบ" },
      { en: "eleven", th: "สิบเอ็ด" },
      { en: "twelve", th: "สิบสอง" },
      { en: "thirteen", th: "สิบสาม" },
      { en: "fourteen", th: "สิบสี่" },
      { en: "fifteen", th: "สิบห้า" },
      { en: "sixteen", th: "สิบหก" },
      { en: "seventeen", th: "สิบเจ็ด" },
      { en: "eighteen", th: "สิบแปด" },
      { en: "nineteen", th: "สิบเก้า" },
      { en: "twenty", th: "ยี่สิบ" },
      { en: "thirty", th: "สามสิบ" },
      { en: "forty", th: "สี่สิบ" },
      { en: "fifty", th: "ห้าสิบ" },
      { en: "sixty", th: "หกสิบ" },
      { en: "seventy", th: "เจ็ดสิบ" },
      { en: "eighty", th: "แปดสิบ" },
      { en: "ninety", th: "เก้าสิบ" },
      { en: "one hundred", th: "หนึ่งร้อย" },
      { en: "one thousand", th: "หนึ่งพัน" }
    ]
  },
  {
    id: "ordinals",
    title: "ลำดับที่",
    note: "การนับลำดับ first ถึง tenth",
    words: [
      { en: "first", th: "ที่หนึ่ง" },
      { en: "second", th: "ที่สอง" },
      { en: "third", th: "ที่สาม" },
      { en: "fourth", th: "ที่สี่" },
      { en: "fifth", th: "ที่ห้า" },
      { en: "sixth", th: "ที่หก" },
      { en: "seventh", th: "ที่เจ็ด" },
      { en: "eighth", th: "ที่แปด" },
      { en: "ninth", th: "ที่เก้า" },
      { en: "tenth", th: "ที่สิบ" }
    ]
  },
  {
    id: "months",
    title: "เดือน",
    note: "ชื่อเดือนทั้ง 12 เดือน",
    words: [
      { en: "January", th: "มกราคม" },
      { en: "February", th: "กุมภาพันธ์" },
      { en: "March", th: "มีนาคม" },
      { en: "April", th: "เมษายน" },
      { en: "May", th: "พฤษภาคม" },
      { en: "June", th: "มิถุนายน" },
      { en: "July", th: "กรกฎาคม" },
      { en: "August", th: "สิงหาคม" },
      { en: "September", th: "กันยายน" },
      { en: "October", th: "ตุลาคม" },
      { en: "November", th: "พฤศจิกายน" },
      { en: "December", th: "ธันวาคม" }
    ]
  },
  {
    id: "greetings",
    title: "คำทักทาย",
    note: "คำพูดพื้นฐานเวลาเจอกัน",
    words: [
      { en: "hello", th: "สวัสดี" },
      { en: "good morning", th: "อรุณสวัสดิ์" },
      { en: "good night", th: "ราตรีสวัสดิ์" },
      { en: "thank you", th: "ขอบคุณ" },
      { en: "sorry", th: "ขอโทษ" },
      { en: "goodbye", th: "ลาก่อน" },
      { en: "see you", th: "แล้วเจอกัน" },
      { en: "welcome", th: "ยินดีต้อนรับ" },
      { en: "nice to meet you", th: "ยินดีที่ได้รู้จัก" }
    ]
  },
  {
    id: "weekdays",
    title: "วันในสัปดาห์",
    note: "ชื่อวันทั้ง 7 วัน",
    words: [
      { en: "Monday", th: "วันจันทร์" },
      { en: "Tuesday", th: "วันอังคาร" },
      { en: "Wednesday", th: "วันพุธ" },
      { en: "Thursday", th: "วันพฤหัสบดี" },
      { en: "Friday", th: "วันศุกร์" },
      { en: "Saturday", th: "วันเสาร์" },
      { en: "Sunday", th: "วันอาทิตย์" }
    ]
  },
  {
    id: "colors",
    title: "สี",
    note: "ชื่อสีพื้นฐาน",
    words: [
      { en: "white", th: "สีขาว", color: "#ffffff" },
      { en: "black", th: "สีดำ", color: "#000000" },
      { en: "red", th: "สีแดง", color: "#ff0000" },
      { en: "blue", th: "สีน้ำเงิน", color: "#0000ff" },
      { en: "yellow", th: "สีเหลือง", color: "#ffff00" },
      { en: "green", th: "สีเขียว", color: "#008000" },
      { en: "brown", th: "สีน้ำตาล", color: "#a52a2a" },
      { en: "orange", th: "สีส้ม", color: "#ffa500" },
      { en: "purple", th: "สีม่วง", color: "#800080" },
      { en: "gray", th: "สีเทา", color: "#808080" }
    ]
  },
  {
    id: "body",
    title: "ส่วนต่าง ๆ ของร่างกาย",
    note: "คำศัพท์เกี่ยวกับร่างกาย",
    words: [
      { en: "head", th: "หัว" },
      { en: "face", th: "ใบหน้า" },
      { en: "eye", th: "ตา" },
      { en: "ear", th: "หู" },
      { en: "nose", th: "จมูก" },
      { en: "mouth", th: "ปาก" },
      { en: "hand", th: "มือ" },
      { en: "arm", th: "แขน" },
      { en: "leg", th: "ขา" },
      { en: "foot", th: "เท้า" }
    ]
  },
  {
    id: "food",
    title: "อาหาร",
    note: "อาหารและเครื่องดื่มใกล้ตัว",
    words: [
      { en: "rice", th: "ข้าว" },
      { en: "bread", th: "ขนมปัง" },
      { en: "water", th: "น้ำ" },
      { en: "milk", th: "นม" },
      { en: "egg", th: "ไข่" },
      { en: "chicken", th: "ไก่" },
      { en: "fish", th: "ปลา" },
      { en: "pork", th: "หมู" },
      { en: "vegetable", th: "ผัก" },
      { en: "juice", th: "น้ำผลไม้" },
      { en: "apple", th: "แอปเปิล" },
      { en: "banana", th: "กล้วย" },
      { en: "mango", th: "มะม่วง" },
      { en: "soup", th: "ซุป" }
    ]
  },
  {
    id: "animals",
    title: "สัตว์",
    note: "ชื่อสัตว์ที่พบบ่อย",
    words: [
      { en: "dog", th: "สุนัข" },
      { en: "cat", th: "แมว" },
      { en: "bird", th: "นก" },
      { en: "elephant", th: "ช้าง" },
      { en: "horse", th: "ม้า" },
      { en: "cow", th: "วัว" },
      { en: "pig", th: "หมู" },
      { en: "monkey", th: "ลิง" },
      { en: "tiger", th: "เสือ" },
      { en: "hippopotamus", th: "ฮิปโปโปเตมัส" },
      { en: "cockroach", th: "แมลงสาบ" },
      { en: "mosquito", th: "ยุง" }
    ]
  },
  {
    id: "vehicles",
    title: "ยานพาหนะ",
    note: "พาหนะสำหรับการเดินทาง",
    words: [
      { en: "car", th: "รถยนต์" },
      { en: "bus", th: "รถบัส" },
      { en: "train", th: "รถไฟ" },
      { en: "airplane", th: "เครื่องบิน" },
      { en: "bicycle", th: "จักรยาน" },
      { en: "boat", th: "เรือ" },
      { en: "taxi", th: "แท็กซี่" },
      { en: "motorcycle", th: "มอเตอร์ไซค์" },
      { en: "ship", th: "เรือใหญ่" },
      { en: "subway", th: "รถไฟใต้ดิน" }
    ]
  },
  {
    id: "verbs-1a",
    title: "คำกริยา 1",
    note: "คำศัพท์เกี่ยวกับการกระทำ",
    words: [
      { en: "stop", th: "หยุด" },
      { en: "make", th: "ทำ" },
      { en: "take", th: "เอา" },
      { en: "have", th: "มี" },
      { en: "buy", th: "ซื้อ" },
      { en: "live", th: "อาศัยอยู่" },
      { en: "study", th: "เรียน" },
      { en: "write", th: "เขียน" },
      { en: "read", th: "อ่าน" },
      { en: "listen", th: "ฟัง" },
      { en: "hear", th: "ได้ยิน" },
      { en: "speak", th: "พูด" }
    ]
  },
  {
    id: "verbs-1b",
    title: "คำกริยา 2",
    note: "คำศัพท์เกี่ยวกับการกระทำ",
    words: [
      { en: "walk", th: "เดิน" },
      { en: "run", th: "วิ่ง" },
      { en: "swim", th: "ว่ายน้ำ" },
      { en: "jump", th: "กระโดด" },
      { en: "like", th: "ชอบ" },
      { en: "play", th: "เล่น" },
      { en: "go", th: "ไป" },
      { en: "look", th: "มอง" },
      { en: "see", th: "เห็น" },
      { en: "watch", th: "ดู" },
      { en: "move", th: "เคลื่อนที่" },
      { en: "eat", th: "กิน" },
      { en: "drink", th: "ดื่ม" }
    ]
  },
  {
    id: "verbs-2a",
    title: "คำกริยา 3",
    note: "คำศัพท์เกี่ยวกับการกระทำ",
    words: [
      { en: "wash", th: "ล้าง" },
      { en: "sit", th: "นั่ง" },
      { en: "stand", th: "ยืน" },
      { en: "sing", th: "ร้องเพลง" },
      { en: "dance", th: "เต้นรำ" },
      { en: "ride", th: "ขี่" },
      { en: "give", th: "ให้" },
      { en: "touch", th: "สัมผัส" },
      { en: "come", th: "มา" },
      { en: "visit", th: "ไปเยี่ยม" },
      { en: "open", th: "เปิด" },
      { en: "close", th: "ปิด" },
      { en: "begin", th: "เริ่ม" }
    ]
  },
  {
    id: "verbs-2b",
    title: "คำกริยา 4",
    note: "คำศัพท์เกี่ยวกับการกระทำ",
    words: [
      { en: "finish", th: "จบ" },
      { en: "teach", th: "สอน" },
      { en: "tell", th: "บอก" },
      { en: "bring", th: "นำมา" },
      { en: "meet", th: "พบ" },
      { en: "learn", th: "เรียนรู้" },
      { en: "want", th: "ต้องการ" },
      { en: "cook", th: "ทำอาหาร" },
      { en: "wear", th: "สวมใส่" },
      { en: "leave", th: "ออกไป" },
      { en: "arrive", th: "มาถึง" },
      { en: "fly", th: "บิน" }
    ]
  },
  {
    id: "adjectives-1a",
    title: "คำคุณศัพท์ 1",
    note: "คำบอกลักษณะและสภาพ",
    words: [
      { en: "cool", th: "เย็น" },
      { en: "hot", th: "ร้อน" },
      { en: "big", th: "ใหญ่" },
      { en: "small", th: "เล็ก" },
      { en: "pretty", th: "น่ารัก" },
      { en: "beautiful", th: "สวย" },
      { en: "happy", th: "มีความสุข" },
      { en: "good", th: "ดี" },
      { en: "bad", th: "ไม่ดี" },
      { en: "clean", th: "สะอาด" },
      { en: "light", th: "เบา" }
    ]
  },
  {
    id: "adjectives-1b",
    title: "คำคุณศัพท์ 2",
    note: "คำบอกลักษณะและสภาพ",
    words: [
      { en: "heavy", th: "หนัก" },
      { en: "dark", th: "มืด" },
      { en: "wet", th: "เปียก" },
      { en: "dry", th: "แห้ง" },
      { en: "glad", th: "ดีใจ" },
      { en: "flat", th: "แบน" },
      { en: "easy", th: "ง่าย" },
      { en: "difficult", th: "ยาก" },
      { en: "same", th: "เหมือนกัน" },
      { en: "different", th: "แตกต่าง" }
    ]
  },
  {
    id: "adjectives-2a",
    title: "คำคุณศัพท์ 3",
    note: "คำบอกลักษณะและสภาพ",
    words: [
      { en: "pink", th: "สีชมพู" },
      { en: "high", th: "สูง" },
      { en: "low", th: "ต่ำ" },
      { en: "tall", th: "สูง" },
      { en: "early", th: "เร็ว" },
      { en: "late", th: "สาย" },
      { en: "enough", th: "พอ" },
      { en: "new", th: "ใหม่" },
      { en: "old", th: "เก่า" },
      { en: "young", th: "หนุ่มสาว" },
      { en: "fresh", th: "สด" },
      { en: "great", th: "ยอดเยี่ยม" }
    ]
  },
  {
    id: "adjectives-2b",
    title: "คำคุณศัพท์ 4",
    note: "คำบอกลักษณะและสภาพ",
    words: [
      { en: "far", th: "ไกล" },
      { en: "near", th: "ใกล้" },
      { en: "kind", th: "ใจดี" },
      { en: "nice", th: "ดี" },
      { en: "soft", th: "นุ่ม" },
      { en: "hard", th: "แข็ง" },
      { en: "real", th: "จริง" },
      { en: "strange", th: "แปลก" },
      { en: "dangerous", th: "อันตราย" },
      { en: "safe", th: "ปลอดภัย" },
      { en: "true", th: "จริง" },
      { en: "top", th: "บนสุด" }
    ]
  }
];

const words = categories.flatMap((category) =>
  category.words.map((word) => ({ ...word, categoryId: category.id }))
);

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
  { th: "พวกเรา　พร้อม (ready)", answer: "We are ready", alternatives: ["We're ready"] },
  { th: "พวกเขา　ยุ่ง (busy)", answer: "They are busy", alternatives: ["They're busy"] },
  { th: "พวกเขา　ใจดี (kind)", answer: "They are kind", alternatives: ["They're kind"] }
];

const state = {
  mode: "en-th",
  current: null,
  currentCategory: null,
  answered: false,
  currentIndex: 0,
  queue: [],
  scores: {
    "en-th": 0,
    "th-en": 0
  },
  mistakes: []
};

const pages = document.querySelectorAll(".page");
const pageLinks = document.querySelectorAll(".page-link");
const testTitle = document.querySelector("#test-title");
const testCategoryItems = document.querySelector("#testCategoryItems");
const quizArea = document.querySelector("#quizArea");
const quizBackButton = document.querySelector("#quizBackButton");
const quizCategoryTitle = document.querySelector("#quizCategoryTitle");
const questionText = document.querySelector("#questionText");
const hintText = document.querySelector("#hintText");
const modeLabel = document.querySelector("#modeLabel");
const questionCount = document.querySelector("#streakText");
const choices = document.querySelector("#choices");
const questionSpeakButton = document.querySelector("#questionSpeakButton");
const nextButton = document.querySelector("#nextButton");
const resultCard = document.querySelector("#resultCard");
const resultTitle = document.querySelector("#resultTitle");
const totalResult = document.querySelector("#totalResult");
const mistakeSection = document.querySelector("#mistakeSection");
const mistakeItems = document.querySelector("#mistakeItems");
const retryButton = document.querySelector("#retryButton");
const categoryItems = document.querySelector("#categoryItems");
const categoryDetail = document.querySelector("#categoryDetail");
const categoryBackButton = document.querySelector("#categoryBackButton");
const categoryTitle = document.querySelector("#categoryTitle");
const wordItems = document.querySelector("#wordItems");
const wordCount = document.querySelector("#wordCount");
const grammarForm = document.querySelector("#grammarForm");
const grammarQuestion = document.querySelector("#grammarQuestion");
const grammarAnswer = document.querySelector("#grammarAnswer");
const grammarFeedback = document.querySelector("#grammarFeedback");
const nextGrammarButton = document.querySelector("#nextGrammarButton");
const grammarCount = document.querySelector("#grammarCount");
const grammarComplete = document.querySelector("#grammarComplete");
const restartGrammarButton = document.querySelector("#restartGrammarButton");
const beVerbIntro = document.querySelector("#beVerbIntro");
const grammarCard = document.querySelector("#grammarCard");
const startGrammarButton = document.querySelector("#startGrammarButton");

let currentGrammarExercise = null;
let grammarQueue = [];
let grammarIndex = 0;

function showPage(pageId) {
  pages.forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });
  window.location.hash = pageId === "homePage" ? "" : pageId.replace("Page", "");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function normalizeSentence(sentence) {
  return sentence
    .trim()
    .toLowerCase()
    .replace(/[.!?]+$/g, "")
    .replace(/[’]/g, "'")
    .replace(/\s+/g, " ");
}

function startGrammarSet() {
  grammarQueue = shuffle(beVerbExercises).slice(0, 10);
  grammarIndex = 0;
  beVerbIntro.classList.add("hidden");
  grammarCard.classList.remove("hidden");
  grammarComplete.classList.add("hidden");
  grammarForm.classList.remove("hidden");
  grammarQuestion.classList.remove("hidden");
  showGrammarExercise();
}

function showBeVerbIntro() {
  currentGrammarExercise = null;
  beVerbIntro.classList.remove("hidden");
  grammarCard.classList.add("hidden");
}

function showGrammarExercise() {
  currentGrammarExercise = grammarQueue[grammarIndex];
  grammarQuestion.textContent = currentGrammarExercise.th;
  grammarCount.textContent = `${grammarIndex + 1} / 10`;
  grammarAnswer.value = "";
  grammarAnswer.disabled = false;
  grammarFeedback.textContent = "";
  grammarFeedback.className = "grammar-feedback";
  nextGrammarButton.classList.add("hidden");
  requestAnimationFrame(() => grammarAnswer.focus());
}

function checkGrammarAnswer(event) {
  event.preventDefault();
  if (!currentGrammarExercise) return;

  const acceptedAnswers = [currentGrammarExercise.answer, ...currentGrammarExercise.alternatives]
    .map(normalizeSentence);
  const isCorrect = acceptedAnswers.includes(normalizeSentence(grammarAnswer.value));

  grammarFeedback.className = `grammar-feedback ${isCorrect ? "correct" : "wrong"}`;
  grammarFeedback.textContent = isCorrect
    ? `ถูกต้อง: ${currentGrammarExercise.answer}.`
    : "ยังไม่ถูก ลองอีกครั้ง";

  if (isCorrect) {
    grammarAnswer.disabled = true;
    if (grammarIndex === grammarQueue.length - 1) {
      grammarForm.classList.add("hidden");
      grammarQuestion.classList.add("hidden");
      nextGrammarButton.classList.add("hidden");
      grammarComplete.classList.remove("hidden");
    } else {
      nextGrammarButton.classList.remove("hidden");
    }
  }
}

function buildQuizQueue(category) {
  const enThQuestions = shuffle(category.words).map((word) => ({ mode: "en-th", word }));
  const thEnQuestions = shuffle(category.words).map((word) => ({ mode: "th-en", word }));
  return shuffle([...enThQuestions, ...thEnQuestions]);
}

function getPromptKey() {
  return state.mode === "en-th" ? "en" : "th";
}

function getAnswerKey() {
  return state.mode === "en-th" ? "th" : "en";
}

function buildChoices(answerWord) {
  const answerKey = getAnswerKey();
  const wrongAnswers = [];
  const sourceWords = state.currentCategory?.words || words;

  shuffle(sourceWords).forEach((word) => {
    const answer = word[answerKey];
    if (word !== answerWord && answer !== answerWord[answerKey] && !wrongAnswers.includes(answer)) {
      wrongAnswers.push(answer);
    }
  });

  if (wrongAnswers.length < 3) {
    shuffle(words).forEach((word) => {
      const answer = word[answerKey];
      if (word !== answerWord && answer !== answerWord[answerKey] && !wrongAnswers.includes(answer)) {
        wrongAnswers.push(answer);
      }
    });
  }

  return shuffle([answerWord[answerKey], ...wrongAnswers.slice(0, 3)]);
}

function updateQuestionHeader() {
  const isEnglishPrompt = state.mode === "en-th";
  modeLabel.textContent = isEnglishPrompt
    ? "เลือกความหมายภาษาไทยของคำศัพท์อังกฤษ"
    : "เลือกคำศัพท์อังกฤษจากความหมายภาษาไทย";
  hintText.textContent = isEnglishPrompt
    ? "เลือกความหมายภาษาไทยที่ใกล้เคียงที่สุด"
    : "เลือกคำศัพท์อังกฤษที่ใกล้เคียงที่สุด";
  questionCount.textContent = `${state.currentIndex + 1} / ${state.queue.length}`;
  questionSpeakButton.classList.toggle("hidden", !isEnglishPrompt);
}

function renderQuestion() {
  const quizItem = state.queue[state.currentIndex];
  state.mode = quizItem.mode;
  state.current = quizItem.word;
  state.answered = false;
  nextButton.disabled = true;
  nextButton.classList.remove("hidden");
  resultCard.classList.add("hidden");
  updateQuestionHeader();

  questionText.textContent = state.current[getPromptKey()];
  choices.innerHTML = "";

  buildChoices(state.current).forEach((choice) => {
    const option = document.createElement("div");
    option.className = "choice-option";
    option.dataset.choice = choice;

    const answerButton = document.createElement("button");
    answerButton.className = "choice-button";
    answerButton.type = "button";
    answerButton.textContent = choice;
    answerButton.addEventListener("click", () => answer(choice, option));

    const speakButton = document.createElement("button");
    speakButton.className = "choice-speak-button";
    speakButton.type = "button";
    speakButton.setAttribute("aria-label", `ฟังเสียง ${choice}`);
    speakButton.textContent = "🔊";
    speakButton.addEventListener("click", () => {
      speakText(choice, state.mode === "en-th" ? "th-TH" : "en-US");
    });

    option.append(answerButton, speakButton);
    choices.appendChild(option);
  });
}

function speakText(text, language = "en-US") {
  if (!("speechSynthesis" in window)) {
    hintText.textContent = "เบราว์เซอร์นี้ไม่รองรับการอ่านออกเสียง";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language;
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

function speakEnglish(text) {
  speakText(text, "en-US");
}

function answer(choice, selectedButton) {
  if (state.answered) return;

  const correctAnswer = state.current[getAnswerKey()];
  const isCorrect = choice === correctAnswer;
  state.answered = true;

  if (isCorrect) {
    state.scores[state.mode] += 1;
  } else {
    state.mistakes.push({
      mode: state.mode,
      prompt: state.current[getPromptKey()],
      answer: correctAnswer,
      selected: choice
    });
  }

  [...choices.children].forEach((option) => {
    const answerButton = option.querySelector(".choice-button");
    const speakButton = option.querySelector(".choice-speak-button");
    answerButton.disabled = true;
    speakButton.disabled = true;
    if (option.dataset.choice === correctAnswer) {
      option.classList.add("correct");
    } else if (option === selectedButton) {
      option.classList.add("wrong");
    } else {
      option.classList.add("dimmed");
    }
  });

  if (state.currentIndex === state.queue.length - 1) {
    showResults();
  } else {
    nextButton.disabled = false;
  }
}

function showResults() {
  const totalScore = state.scores["en-th"] + state.scores["th-en"];
  const isPerfect = totalScore === state.queue.length;
  resultTitle.textContent = `ทำครบ ${state.queue.length} ข้อแล้ว`;
  totalResult.textContent = `${totalScore} / ${state.queue.length}`;
  renderMistakes();
  retryButton.classList.toggle("hidden", isPerfect);
  resultCard.classList.remove("hidden");
  nextButton.disabled = true;
  nextButton.classList.add("hidden");
}

function renderMistakes() {
  mistakeItems.innerHTML = "";

  if (state.mistakes.length === 0) {
    mistakeSection.classList.add("hidden");
    return;
  }

  mistakeSection.classList.remove("hidden");
  state.mistakes.forEach((mistake) => {
    const item = document.createElement("div");
    item.className = "mistake-item";
    const direction = mistake.mode === "en-th" ? "English → ไทย" : "ไทย → English";
    item.innerHTML = `
      <strong>${mistake.prompt}</strong>
      <span>${direction}</span>
      <span>คำตอบที่ถูก: ${mistake.answer}</span>
      <span>เลือก: ${mistake.selected}</span>
    `;
    mistakeItems.appendChild(item);
  });
}

function startQuiz(category = state.currentCategory) {
  if (!category) return;
  state.currentCategory = category;
  state.currentIndex = 0;
  state.queue = buildQuizQueue(category);
  state.scores = {
    "en-th": 0,
    "th-en": 0
  };
  state.mistakes = [];
  retryButton.classList.add("hidden");
  testTitle.textContent = "แบบทดสอบ 4 ตัวเลือก";
  quizCategoryTitle.textContent = category.title;
  testCategoryItems.classList.add("hidden");
  quizArea.classList.remove("hidden");
  renderQuestion();
}

function startRandomQuiz() {
  const category = categories[Math.floor(Math.random() * categories.length)];
  startQuiz(category);
}

function renderCategoryList() {
  wordCount.textContent = `${words.length} คำ`;
  categoryItems.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "category-card";
    button.type = "button";
    button.innerHTML = `
      <strong>${category.title}</strong>
      <span>${category.note}</span>
      <small>${category.words.length} คำ</small>
    `;
    button.addEventListener("click", () => showCategory(category.id));
    categoryItems.appendChild(button);
  });
}

function showCategory(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category) return;

  categoryTitle.textContent = category.title;
  wordCount.textContent = `${category.words.length} คำ`;
  categoryItems.classList.add("hidden");
  categoryDetail.classList.remove("hidden");
  renderWordList(category.words);
}

function showCategories() {
  wordCount.textContent = `${words.length} คำ`;
  categoryDetail.classList.add("hidden");
  categoryItems.classList.remove("hidden");
}

function renderWordList(list) {
  wordItems.innerHTML = "";

  list.forEach((word) => {
    const item = document.createElement("div");
    item.className = "word-item";
    const english = document.createElement("div");
    english.className = "word-english";

    const label = document.createElement("strong");
    label.textContent = word.en;

    if (word.color) {
      const swatch = document.createElement("span");
      swatch.className = "color-swatch";
      swatch.style.background = word.color;
      swatch.title = word.color;
      english.append(swatch);
    }

    const speakButton = document.createElement("button");
    speakButton.className = "speak-button small";
    speakButton.type = "button";
    speakButton.setAttribute("aria-label", `ฟังเสียง ${word.en}`);
    speakButton.textContent = "🔊";
    speakButton.addEventListener("click", () => speakEnglish(word.en));

    const thai = document.createElement("span");
    thai.textContent = word.th;

    english.append(label, speakButton);
    item.append(english, thai);
    wordItems.appendChild(item);
  });
}

pageLinks.forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
    if (button.dataset.page === "testPage") {
      startRandomQuiz();
    }
    if (button.dataset.page === "listPage") {
      showCategories();
    }
    if (button.dataset.page === "beVerbPage") {
      showBeVerbIntro();
    }
  });
});

nextButton.addEventListener("click", () => {
  state.currentIndex += 1;
  renderQuestion();
});

quizBackButton.addEventListener("click", () => showPage("homePage"));
categoryBackButton.addEventListener("click", showCategories);
retryButton.addEventListener("click", () => startQuiz());
questionSpeakButton.addEventListener("click", () => {
  if (state.current) speakEnglish(state.current.en);
});
grammarForm.addEventListener("submit", checkGrammarAnswer);
startGrammarButton.addEventListener("click", startGrammarSet);
nextGrammarButton.addEventListener("click", () => {
  grammarIndex += 1;
  showGrammarExercise();
});
restartGrammarButton.addEventListener("click", startGrammarSet);

renderCategoryList();
showCategories();

const initialPage = {
  "#test": "testPage",
  "#list": "listPage",
  "#grammar": "grammarPage",
  "#beVerb": "beVerbPage"
}[window.location.hash] || "homePage";

showPage(initialPage);

if (initialPage === "testPage") {
  startRandomQuiz();
}

if (initialPage === "beVerbPage") {
  showBeVerbIntro();
}
