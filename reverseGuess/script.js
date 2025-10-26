let guessCount = 0;
let currentGuess = null;


function startGame() {
  guessCount = 0;
  document.getElementById("result").textContent = "";
  enableButtons(true);
  makeNewGuess();
}

function makeNewGuess() {
  currentGuess = Math.floor(Math.random() * 100) + 1;
  guessCount++;
  showGuess();
}

function showGuess() {
  const guessText = document.getElementById("guessText");
  guessText.textContent = `Mit gæt er: ${currentGuess}`;
}

function tooLow() {
  logFeedback("for lavt");
  makeNewGuess();
}

function tooHigh() {
  logFeedback("for højt");
  makeNewGuess();
}

function correct() {
  logFeedback("korrekt");
  enableButtons(false);
  document.getElementById("result").textContent =
    `Jeg gættede rigtigt! Tallet var ${currentGuess}. Det tog mig ${guessCount} forsøg 🎉`;
}

function logFeedback(feedback) {
  console.log(`Brugeren sagde: ${feedback}`);
}

function enableButtons(state) {
  document.getElementById("lowerBtn").disabled = !state;
  document.getElementById("higherBtn").disabled = !state;
  document.getElementById("correctBtn").disabled = !state;
}

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("lowerBtn").addEventListener("click", tooLow);
document.getElementById("higherBtn").addEventListener("click", tooHigh);
document.getElementById("correctBtn").addEventListener("click", correct);
