const containerEl = document.querySelector(".container");

const phrases = ["Be kind to yourself", "Everything is going to be alright",
  "Be patient", "Have a hope"];

let phraseIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML =
  `<h1>I'm proud of you....${phrases[phraseIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex === phrases[phraseIndex].length) {
    phraseIndex++;
    characterIndex = 0;
  }

  if (phraseIndex === phrases.length) {
    phraseIndex = 0;
  }
  setTimeout(updateText, 400);
};
