const wrongLetters = document.querySelector("#wrongLetters");
const secretWord = document.querySelector("#secretWord");
const popupContainer = document.querySelector("#popupContainer");
const notificationsContainer = document.querySelector(
  "#notificationsContainer"
);
const playBtn = document.querySelector("#play");
// const figureContainer = document.querySelectorAll("#figureContainer")

let wordsArr = ["javascript", "frontend", "software", "programming"];
let correctLetters = ["a", "j", "s"];

let randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];

function displayWord() {
  secretWord.innerHTML = `
  ${randomWord
    .split("")
    .map(
      (item) =>
        `
      <span class="letter">
      ${correctLetters.includes(item) ? item : " "}
      </span>
      `
    )
    .join(" ")}
    `;

  console.log(secretWord.innerText);
}

displayWord();
