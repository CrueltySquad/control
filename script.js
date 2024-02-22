import { WORDS } from "./words.js";

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)

document.getElementById("guess-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let guessInput = document.getElementById("guess-input");
    let guess = guessInput.value.toLowerCase();
    if (guess.length === 5) {
        currentGuess.push(guess);
        guessInput.value = "";
        guessesRemaining--;
        if (guess === rightGuessString) {
            toastr.success("Congratulations! You guessed the correct word.");
        } else if (guessesRemaining === 0) {
            toastr.error("Sorry, you ran out of guesses. The correct word was " + rightGuessString + ".");
        } else {
            toastr.info("Incorrect guess. You have " + guessesRemaining + " guesses remaining.");
        }
    } else {
        toastr.warning("Please enter a 5-letter word.");
    }
});
