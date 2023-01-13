"use strict";

// function for textContent display
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// function for score display
const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

// highScore
let highScore = 0;

// Generate random number
let randomNum = Math.floor(Math.random() * 100);

// Score
let score = Number(document.querySelector(".score").textContent);

document.querySelector(".check").addEventListener("click", function () {
  // Guess Number
  const guess = Number(document.querySelector(".guessing").value);

  // when guess is a number
  if (guess > 0 && guess <= 100) {
    if (guess === randomNum) {
      displayMessage("➡️Correct Number!😍");
      document.querySelector(".number").textContent = randomNum;

      document.querySelector("body").style.background =
        "linear-gradient(90deg, rgb(128, 107, 41), rgb(153, 125, 38)";

      // calculate highScore
      if (highScore < score) {
        document.querySelector(".highScore").textContent = score;
      }
    } else if (score <= 1) {
      displayMessage("➡️You lost😔 game over");
      displayScore(--score);
      document.querySelector("body").style.background =
        "linear-gradient(90deg, rgb(143, 53, 53), rgb(99, 7, 7)";
    } else {
      guess < randomNum
        ? displayMessage("➡️Too low😔! Correct Number is higher than this")
        : displayMessage("➡️Too High😔! Correct Number is Lesser than this");
      displayScore(--score);
    }

    // when guess is not a number
  } else {
    displayMessage("Invalid number");
    displayScore(--score);
  }
});

// add event on again button
document.querySelector(".again").addEventListener("click", function () {
  displayMessage("Start guessing...");
  score = 10;
  displayScore(score);
  document.querySelector(".guessing").value = "";
  document.querySelector("body").style.background = "rgb(41, 39, 39";
  randomNum = Math.floor(Math.random() * 100);
  document.querySelector(".number").textContent = "?";
});
