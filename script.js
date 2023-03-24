'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(secretNumber);
console.log(score, 'score');
console.log(highScore, 'highScore');

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    const showMessage = (msg) => {
        if (score > 1) {
            document.querySelector('.message').textContent = msg;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    }

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    } else if (secretNumber < guess) {
        showMessage('📈 Too High!');
    } else if (secretNumber > guess) {
        showMessage('📉 Too Low!');
    } else if (secretNumber === guess) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style = '#222';
    document.querySelector('.number').style.width = '15rem';
})
