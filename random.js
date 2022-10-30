'use strict';
/// Random number guessing game
// 1. Computer generates random number between 1 and 100 
// 2. User needs to guess which number it is.- Store the user selected number in a variable
// 4. Check if its same as the random number. 
// 5. If not, check if its lower/higher. Give tip
// 6. Ask for another guess and replace variable. Repeat.


const contEl = document.getElementById("container");
const iconEl = document.getElementById("icon");
const form = document.getElementById("guessForm");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");
const playAgain = document.getElementById("play");
let number = Math.floor(Math.random() * 100) + 1;

playAgain.onclick = function() {
    window.location.reload()
};

function showErrorMessage(message) {
    form.classList.add("animation");
    errorMessage.classList.add("visible");
    errorMessage.innerHTML = message;

    setTimeout ( function () {
    errorMessage.classList.remove("visible");
    form.classList.remove("animation");
    }, 1800);  
}

function showSuccessMessage(message) {
    successMessage.classList.add("visible");
    contEl.classList.add("invisible");
    iconEl.classList.add("animate");

}

form.onsubmit = function (event) {
    event.preventDefault();
    let guess = Number(form.elements.guess.value);
    form.elements.guess.value = ""; // removing input for the user

    if (Number.isNaN(guess)){
        showErrorMessage("that is not a number");
    } else if (guess === number) {
        showSuccessMessage();
    } else if (guess < number) {
        showErrorMessage("Go higher");
    } else if (guess > number ){
        showErrorMessage("Go lower");
    }
};


/// My solution to the random number guessing game before UI.

/* let randomNum =  Math.floor(Math.random() * 100) + 1;
let choosenNum = Number(prompt('Guess the number 1-100:'));
console.log (randomNum, choosenNum);

while (randomNum !== choosenNum) {

    if (choosenNum < randomNum) {
        choosenNum = Number(prompt('Pick a higher number:'));
    } else {
        choosenNum = Number(prompt('Pick a lower number:'));
    }
    if (randomNum === choosenNum) {
        alert("You guessed it, the random number is: " + randomNum);
    }
 } */


