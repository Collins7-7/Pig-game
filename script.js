'use strict';

//selecting elements 
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

let currentScore0 = 0;
let currentScore1 = 0
//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let activePlayer  = 0;
let currentScore = 0;
const scores = [0, 0]


//Rolling dice functionality

btnRoll.addEventListener("click", function(){
    //Gerating a random dice roll
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
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer0.classList.toggle("player--active");
    activePlayer1.classList.toggle("player--active");
activePlayer = activePlayer === 0? 1 : 0;

}

})