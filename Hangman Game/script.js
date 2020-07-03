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

let correctLetters = [];
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

//show notification
function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

//update wrong letters
function updateWrongLetters() {
  //console.log(wrongLetters);

  //Outputs wrong letters
  wronlettersEl.innerHTML = "<p>Wrong Letters</p>";

  wrongLetters.forEach((letter) => {
    wronlettersEl.innerHTML += `<span>${letter},</span>`;
  });

  //draw figure parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  //Check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessageEl.innerText = "You've Lost!";
    popupEl.style.display = "flex";
  }
}

//key down press
window.addEventListener("keydown", (e) => {
  //console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 95) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLetters();
      } else {
        showNotification();
      }
    }
  }
});

displayWord();

//function playAgain
function playAgain() {
  popupEl.style.display = "none";
  correctLetters.splice(0);
  wrongLetters.splice(0);
  correctLetters = [];
  wronlettersEl.innerHTML = "";
  figureParts.forEach((part) => (part.style.display = "none"));

  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();
}

//Event Listeners
playAgainBtn.addEventListener("click", playAgain);
