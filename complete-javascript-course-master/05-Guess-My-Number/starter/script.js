'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // Response if no guess is input when checked
  if (!guess) {
    displayMessage(`Please select a number before clicking "check"`);
    // Response if the guess is too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? `📈 Too high! 📈` : `🥶 Too low! 🥶`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`😵 YOU FOOL! 😵`);
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
    // Response when guess is correct
  } else if (guess === secretNumber) {
    displayMessage(`🥳 NAILED IT! 🥳`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector(
    '.message'
  ).textContent = `Please select a number before clicking "check"`;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
