const wordEl = document.getElementById("word");
const wronlettersEl = document.getElementById("wrong-letters");
const popupEl = document.getElementById("popup-container");
const finalMessageEl = document.getElementById("final-message");
const notification = document.getElementById("notification-container");
const playAgainBtn = document.getElementById("play-again");

const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "application",
  "mental",
  "chelsea",
  "jasmine",
  "emmanuel",
  "friend",
  "great",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

//console.log(selectedWord);

const correctLetters = ["j", "a", "s", "m", "i", "n", "e"];
const wrongLetters = [];

//show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) =>
          `<span class="letter">${
            correctLetters.includes(letter) ? letter : ""
          }</span>`
      )
      .join("")}`;

  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessageEl.innerText = "Congratulations, You Won!";
    popupEl.style.display = "flex";
  }
}

displayWord();

//function playAgain
function playAgain() {
  popupEl.style.display = "none";
}

//Event Listeners
playAgainBtn.addEventListener("click", playAgain);
