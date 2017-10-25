// Start new game
window.onload = function() {
  chooseAnswer();
}


//Declare Variable
var allAnswers = ["spamalot", "camelot", "holy grail", "king arthur", "knights who say ni", "lancelot", "tim", "holy hand grenade of antioch", "bible", "god", "shrubbery", "coconut", "african swallow", "brave sir robin", "migratory birds", "french", "english", "witch", "newt", "burn the witch", "watery tart", "sword", "round table", "huge tracts of land", "swamp", "castle", "wooden rabbit", "fart"];

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
    if (allAnswers[choose][i] === " ") {
      displayAnswer.push(" ");
    } else {
    displayAnswer.push("_");
  }
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
// Removes commas from the displayAnswer for cleanliness
function removeComma(arr) {
  var str = arr.toString();
  displayStr = str.replace(/,/g, "");
  return displayStr;
}
// Check to see if the player has won
function compareArray(arr1, arr2) {
  var test = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      test = test + 1;
    };
  };
  if (test === arr1.length) {
    winReset();
  };
}

function reset() {
  currentAnswer.length = 0;
  displayAnswer.length = 0;
  wrongAnswers.length = 0;
  chooseAnswer();
}

function winReset() {
//  alert("You win!")
  reset();
  numWin = numWin + 1;
  document.getElementById('winCard').style.opacity = "1";
  document.getElementById('winCard').style.width = "45%"
}

function loseReset() {
//  alert("You were turned into a newt! Correct answer was: " + removeComma(currentAnswer));
  reset();
  numLoss = numLoss + 1;
  document.getElementById('loseCard').style.opacity = "1";
  document.getElementById('loseCard').style.width = "45%"
}

function goAway(id) {
  document.getElementById(id).style.opacity = "0";
  document.getElementById(id).style["z-index"] = "1";
  sleep(1000);
  document.getElementById(id).style.width = "1%";
}


//Functional Actions
document.onkeypress = function(event) {
  var guess = event.key;
  if (guess === "Enter") {
    document.getElementById('img').style.opacity = "0";
    document.getElementById('img').style.width = "0px";
    document.getElementById('player').style.opacity = "1.0";
    reset();
  } else {
    newGuess(guess);
  }
  // Displays the current puzzle and wrong answers
  document.getElementById('currentDisplay').innerHTML = removeComma(displayAnswer).toUpperCase();
  document.getElementById('wrongAnswers').innerHTML = wrongAnswers.toString().toUpperCase();
  // Display wins and losses to the player
  document.getElementById('playerWins').innerHTML = "Wins: " + numWin.toString();
  document.getElementById('playerLoss').innerHTML = "Losses: " + numLoss.toString();
  //Looks for win condition
  compareArray(currentAnswer, displayAnswer);
  //Looks for loss condition
  if (wrongAnswers.length > 10) {
    loseReset();
  };
}
