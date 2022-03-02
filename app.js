const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const dice = document.querySelector('.dice')
const scorePlayer1 = document.querySelector('#score--0')
const scorePlayer2 = document.querySelector('#score--1')
const currentPlayer1 = document.querySelector('#current--0')
const currentPlayer2 = document.querySelector('#current--1')

dice.style.display = 'block'

let currentScore = 0
let activePlayer = 0
let score = [0, 0]

btnRoll.addEventListener('click', rollDice)

function rollDice() {
    const randomNumber = Math.trunc(Math.random() * 6 + 1) 
    dice.src = `dice-${randomNumber}.png`
    dice.style.display = 'block'

    if(randomNumber !== 1) {
        const randomNumber = Math.trunc(Math.random() * 6 + 1) 
        currentScore += randomNumber
        currentPlayer1.textContent = currentScore 
        document.querySelector(`#current--${activePlayer}`,).textContent = currentScore 
    } else {
        changePlayer()
    }
}


function hold() {
    score[activePlayer] += currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]
    changePlayer()
}

function changePlayer() {
    document.querySelector(`#current--${activePlayer}`).textContent = '0'
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector(`.player--0`).classList.toggle('player--active')
    document.querySelector(`.player--1`).classList.toggle('player--active')
}
