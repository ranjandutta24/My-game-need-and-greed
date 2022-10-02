'use strict';
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle(`player--active`);
  player1.classList.toggle(`player--active`);
};
const diceRoll = () => {
  if (playing) {
    const number = Math.trunc(Math.random() * 6) + 1;
    console.log(number);
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${number}.png`;
    if (number != 1) {
      currentScore = currentScore + number;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};
const hold = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      switchPlayer();
    }
  }
};
const startNew = () => {
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add(`hidden`);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add(`player--active`);
  currentScore = 0;
};
startNew();
btnRoll.addEventListener(`click`, diceRoll);
btnHold.addEventListener(`click`, hold);
btnNew.addEventListener(`click`, startNew);
