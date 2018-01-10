# Hangman-Game

A simple game of hangman with a Monty Python theme. The purpose of this excerciese was to develop and implement game mechanics and algorithms using JavaScript.

Deployed Version: https://jes3rk.github.io/Hangman-Game/

## Functionality

The game functions by listening for user inputs. On the entirety of the window, there is an event listener that is triggered by key presses. When a user presses a key, the key value is recorded and compared to the correct answer split into an array. The guess is then pushed to a seperate array for displaying the correctly guessed letters or another array displaying the wrong guesses.

If the user exceeds the 10 allotted guesses per round, the user has lost and the scores are updated accordingly.
