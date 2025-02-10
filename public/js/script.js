const answers_no = {
  english: [
    "No",
    "Oli, estás segura?",
    "Amooor... estás realmente segura??",
    "Estás segurísima???",
    "Bby, mejor piénsalo de nuevo...",
    "Vamos di que sí",
    "No seas tan fría :(",
    "Cielito, tal vez lo podemos hablar...?",
    "Jum! No voy a preguntar de nuevo ah...",
    "Ok.. eso hirió mis sentimientos... Chau",
    "Amor, por qué juegas conmigo? :c",
    "Por qué me haces esto? :(",
    "Oliii Porfavor!! dame una oportunidad uwu!",
    "Mor, yaaaa suficientee :( !",
    "Oli preciosa <3 Ok... comencemos de nuevo :3",
  ],
  french: [
    "Non",
    "Tu es sûr ?",
    "Tu es vraiment sûr ??",
    "Tu es vraiment vraiment sûr ???",
    "Réfléchis encore?",
    "Tu ne crois pas aux deuxièmes chances ?",
    "Pourquoi tu es si froid?",
    "Peut-être, on peut en parler ?",
    "Je ne vais pas demander encore une fois!",
    "D'accord, maintenant ca me fait mal!",
    "Tu es juste méchant!",
    "Pourquoi tu me fais ça?",
    "Donnez-moi une chance plz!",
    "Je te supplie d'arrêter!",
    "D'accord, recommençons..",
  ],
  thai: [
    "ไม่อ่ะ",
    "แน่ใจจริงๆหรอคะ?",
    "แน่ใจจริงๆ จริงๆนะคะ?",
    "อย่าบอกนะว่านี่แน่ใจสุดๆแล้วจริงๆ ?",
    "ลองคิดดูอีกทีหน่อยสิคะ..",
    "ขอโอกาศที่สองทีค่ะ..",
    "อย่าเย็นชาสิคะ กระซิกๆ",
    "ขอร้องนะคะ",
    "น้าาาๆๆๆๆๆ",
    "เราจะร้องไห้เอานะ กระซิกๆ",
    "จะเอางี้ๆจริงหรอคะ",
    "ฮือออออ",
    "ขอโอกาศครั้งที่สองที่ค่ะ!",
    "ขอร้องละค่าาา",
    "โอเคค่ะ.. งั้นเริ่มใหม่ !",
  ],
};

answers_yes = {
  english: "Siiiii",
  french: "Oui",
  Thailand: "เย่ คืนดีกันแล้วน้า",
};

let language = "english"; // Default language is English
const next_button = document.getElementById("next-button");
const no_button = document.getElementById("no-button");
const yes_button = document.getElementById("yes-button");
const texto = document.getElementById("question-heading");
const repeticion = 0;
let i = 1;
let size = 50;
let clicks = 0;

next_button.addEventListener("click", () => {
  next_button.classList.add("hide-button");
  yes_button.classList.remove("hide-button");
  no_button.classList.remove("hide-button");
  texto.innerHTML = "¿Quisieras ser mi Valentín?";
});

no_button.addEventListener("click", () => {
  // Change banner source
  let banner = document.getElementById("banner");
  /*if (clicks === 0) {
    banner.src = "public/images/no.gif";
    refreshBanner();
  }*/

  if (clicks >= 0) {
    banner.src = "public/images/t" + clicks + ".PNG";
  }

  clicks++;
  // increase button height and width gradually to 250px
  const sizes = [40, 50, 30, 35, 45];
  const random = Math.floor(Math.random() * sizes.length);
  size += sizes[random];
  yes_button.style.height = `${size}px`;
  yes_button.style.width = `${size}px`;
  let total = answers_no[language].length;
  // change button text
  if (i < total - 1) {
    no_button.innerHTML = answers_no[language][i];
    i++;
  } else if (i === total - 1) {
    alert(answers_no[language][i]);
    i = 1;
    no_button.innerHTML = answers_no[language][0];
    yes_button.innerHTML = answers_yes[language];
    //yes_button.style.height = "50px";
    //yes_button.style.width = "50px";
    yes_button.style = "";
    size = 50;
    clicks = 0;
  }
});

yes_button.addEventListener("click", () => {
  // change banner gif path
  let banner = document.getElementById("banner");
  banner.src = "public/images/ternu.gif";
  refreshBanner();
  // hide buttons div
  let buttons = document.getElementsByClassName("buttons")[0];
  buttons.style.display = "none";
  // show message div
  let message = document.getElementsByClassName("message")[0];
  message.style.display = "block";
  texto.style.display = "none";
});

function refreshBanner() {
  // Reload banner gif to force load
  let banner = document.getElementById("banner");
  let src = banner.src;
  banner.src = "";
  banner.src = src;
}

function changeLanguage() {
  const selectElement = document.getElementById("language-select");
  const selectedLanguage = selectElement.value;
  language = selectedLanguage;

  // Update question heading
  const questionHeading = document.getElementById("question-heading");
  if (language === "french") {
    questionHeading.textContent = "Tu veux être mon valentin?";
  } else if (language === "thai") {
    questionHeading.textContent = "คืนดีกับเราได้อ่ะป่าว?";
  } else {
    questionHeading.textContent = "Will you be my valentine?";
  }

  // Reset yes button text
  yes_button.innerHTML = answers_yes[language];

  // Reset button text to first in the new language
  if (clicks === 0) {
    no_button.innerHTML = answers_no[language][0];
  } else {
    no_button.innerHTML = answers_no[language][clicks];
  }

  // Update success message
  const successMessage = document.getElementById("success-message");
  if (language === "french") {
    successMessage.textContent = "Yepppie, à bientôt :3";
  } else if (language === "thai") {
    successMessage.textContent = "ฮูเร่ คืนดีกันแล้วน้า :3";
  } else {
    successMessage.textContent = "Yepppie, see you sooonnn :3";
  }
}
