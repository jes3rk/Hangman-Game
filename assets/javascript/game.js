// Start new game
window.onload = function() {
  chooseAnswer();
}

var allAnswers = ["hello", "goodbye"];

var currentAnswer = new Array();
var displayAnswer = new Array();
var wrongAnswers = new Array();


function chooseAnswer() {
  choose = Math.floor(Math.random()*allAnswers.length);
  currentAnswer = allAnswers[choose].split("");
  for (var i = 0; i < allAnswers[choose].length; i++) {
    displayAnswer.push("_");
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


document.onkeypress = function(event) {
  var guess = event.key;
  newGuess(guess);
  document.getElementById('currentDisplay').innerHTML = removeComma(displayAnswer);
  document.getElementById('wrongAnswers').innerHTML = wrongAnswers.toString();
  compareArray(currentAnswer, displayAnswer);
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
  //This is the win condition finder
  if (test === array1.length) {
    winReset();
  };
}

function winReset() {
  chooseAnswer();
}
