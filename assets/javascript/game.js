// Start new game
window.onload = function() {
  chooseAnswer();
}


//Declare Variable
var allAnswers = ["spamalot", "camelot", "holy grail", "king arthur", "knights who say ni", "lancelot", "tim", "holy hand grenade of antioch", "bible", "god", "shrubbery", "coconut", "african swallow", "brave sir robin", "migratory birds", "french", "english", "rabbit", "witch"];

var currentAnswer = [];
var displayAnswer = [];
var wrongAnswers = [];
var numWin = 0;
var numLoss = 0;

// Functions
function chooseAnswer() {
  choose = Math.floor(Math.random()*allAnswers.length);
  currentAnswer = allAnswers[choose].split("");
  for (var i = 0; i < allAnswers[choose].length; i++) {
//    if (allAnswers[choose] === " ") {
//      displayAnswer.push(" ");
//    };
//    else {
    displayAnswer.push("_");
//    };
  };
}

function newGuess(guess) {
  for (var i = 0; i < currentAnswer.length; i++) {
    if (guess === currentAnswer[i]) {
      displayAnswer[i] = guess;
    };
  };
  if (currentAnswer.indexOf(guess) === -1) {
    wrongAnswers.push(guess);
  };
}

function removeComma(array) {
  var str = array.toString();
  displayStr = str.replace(/,/g, "");
  return displayStr;
}

function compareArray(array1, array2) {
  var test = 0;
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      test = test + 1;
    };
  };
  if (test === array1.length) {
    winReset();
    alert("You win!")
  };
}

function winReset() {
  currentAnswer.length = 0;
  displayAnswer.length = 0;
  wrongAnswers.length = 0;
  numWin = numWin + 1;
  chooseAnswer();
}

function loseReset() {
  alert("You were turned into a newt! Correct answer was: " + removeComma(currentAnswer));
  currentAnswer.length = 0;
  displayAnswer.length = 0;
  wrongAnswers.length = 0;
  numLoss = numLoss + 1;
  chooseAnswer();
}

//Functional Actions
document.onkeypress = function(event) {
  var guess = event.key;
  newGuess(guess);
  document.getElementById('currentDisplay').innerHTML = removeComma(displayAnswer);
  document.getElementById('wrongAnswers').innerHTML = wrongAnswers.toString();
  //Looks for win condition
  compareArray(currentAnswer, displayAnswer);
  //Looks for loss condition
  if (wrongAnswers.length > 10) {
    loseReset();
  };
  document.getElementById('playerWins').innerHTML = "Wins: " + numWin.toString();
  document.getElementById('playerLoss').innerHTML = "Losses: " + numLoss.toString();
}
