const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0

function randomSquare() {
    square.forEach(classname => {
        classname.classList.remove('mole')
    })
    let r
}
