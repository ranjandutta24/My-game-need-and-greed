'use strict';
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
let currentScore = 0;
let activePlayer = 0;

const diceRoll = () => {
  const number = Math.trunc(Math.random() * 6) + 1;
  console.log(number);
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${number}.png`;
  if (number != 1) {
    currentScore = currentScore + number;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove(`player--active`);
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add(`player--active`);
  }
};

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

btnRoll.addEventListener(`click`, diceRoll);
