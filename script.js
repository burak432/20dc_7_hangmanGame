const wrongLetters = document.querySelector("#wrongLetters");
const secretWord = document.querySelector("#secretWord");
const popupContainer = document.querySelector("#popupContainer");
const notificationsContainer = document.querySelector(
  "#notificationsContainer"
);
const playBtn = document.querySelector("#play");
// const figureContainer = document.querySelectorAll("#figureContainer")

let wordsArr = ["javascript", "frontend", "software", "programming"];

let correctLettersArr = ["j", "a", "v", "s", "c", "r", "i", "p", "t"];
let wrongLettersArr = [];

let randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];

function displayWord() {
  secretWord.innerHTML = `
  ${randomWord
    .split("")
    .map(
      (item) => `
      <span class="letter">
      ${correctLettersArr.includes(item) ? item : ""}
      </span>
      `
    )
    .join("")}
    `;

  const innerWord = secretWord.innerText.replace(/\n/g, "");

  console.log(innerWord);

  if (innerWord === randomWord) {
    popupContainer.style.display = "flex";
  }
}

//show notification function
function showNotification() {
  notificationsContainer.classList.add("show");
  setTimeout(() => {
    notificationsContainer.classList.remove("show");
  }, 1500);
}

function updateWrongLettersEl() {
  wrongLetters.innerHTML = `
${wrongLettersArr.length > 0 ? "<p>Wrong</p>" : ""}
${wrongLettersArr.map((item) => `<span>${item}</span>`)}
`;
}

//key press event
window.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (randomWord.includes(letter)) {
      if (!correctLettersArr.includes(letter)) {
        correctLettersArr.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLettersArr.includes(letter)) {
        wrongLettersArr.push(letter);
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

displayWord();
