'use strict';

//selecting elements 
let score0 = 0;
let score1 = 0;
const activePlayer0 = document.querySelector(".player--0");
const activePlayer1 = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl= document.querySelector('.dice');
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const holdButton = document.querySelector(".btn--hold")

let playing = true;

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let activePlayer  = 0;
let currentScore = 0;
const scores = [0, 0]


const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer0.classList.toggle("player--active");
    activePlayer1.classList.toggle("player--active");
activePlayer = activePlayer === 0? 1 : 0;
}
//Rolling dice functionality

btnRoll.addEventListener("click", function(){
    //Gerating a random dice roll
if (playing){
const dice = Math.trunc(Math.random()*6) + 1;
console.log(dice)
    //Display dice
diceEl.classList.remove("hidden");

diceEl.src = `dice-${dice}.png`;


//Check for rolled 1: if true, switch to next player.

if (dice !== 1){
currentScore += dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}else{
  
switchPlayer();
}}

})

holdButton.addEventListener("click", function(){
if (playing){
   
   scores[activePlayer] += currentScore
  document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

   if (scores[activePlayer] >= 20){
    playing = false;

    diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
   } else{
    switchPlayer();
   }
}
   
   
});