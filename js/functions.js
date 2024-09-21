'use strict'

let randNum1 = 0
let randNum2 = 0

let correctAnswers = 0
let wrongAnswers = 0

const getRandNum = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

const randomizeNumbers = () => {
    randNum1 = getRandNum(1, 10)
    randNum2 = getRandNum(1, 10)
    document.querySelector('#num1').innerHTML = randNum1
    document.querySelector('#num2').innerHTML = randNum2
}

addEventListener('DOMContentLoaded', () => {randomizeNumbers()})

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = randNum1 + randNum2

    if (answer === correctAnswer) {
        correctAnswers++
        document.querySelector('#correctAns').innerHTML = correctAnswers;
        alert('Oikein!')
    } else {
        wrongAnswers++
        document.querySelector('#wrongAns').innerHTML = wrongAnswers;
        alert('Väärin!')
    }

    randomizeNumbers()
    document.querySelector('input').value = ''
})