const containerEl = document.querySelector(".container");
const phrases = ["Be kind to yourself", "Everything is going to be alright",
  "Be patient", "Have a hope"];

let phraseIndex = 0;

containerEl.innerHTML = `<h1>I'm proud of you....${phrases[phraseIndex]}</h1>`;
