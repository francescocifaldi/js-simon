//init all variables to handle DOM

const arrayLength = 5;
const max = 50;
const numbersList = document.getElementById('numbers-list');
const answerForm = document.getElementById('answers-form')
const countdown = document.getElementById('countdown');
const instructionElement = document.getElementById('instructions');
const instructionAfterElement = document.getElementById('instructionsAfter')
const myBtn = document.getElementById('btn');
const resultMessage = document.getElementById('message')
const refreshButton = document.getElementById('refresh')
const countdownStart = 2;
const intervalInMs = 1000;
let tempoRimasto = countdownStart;
const array = generateRandomArray(arrayLength);
let copyArray = array.slice();

countdown.innerHTML = tempoRimasto;

//start countdown from variable, when reach 0, exit and change visibility of html elements
const countdownID = setInterval(function () {
    --tempoRimasto
    countdown.innerHTML = tempoRimasto;
    if (tempoRimasto === 0) {
        clearInterval(countdownID)
        countdown.classList.add('d-none')
        instructionElement.classList.add('d-none')
        numbersList.classList.add('d-none')
        instructionAfterElement.classList.remove('d-none')
        answerForm.classList.remove('d-none')
    }
}, intervalInMs)

//when user clicks, take all the answers and check with random array then print the result 
myBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let answerList = document.querySelectorAll('input')
    let correctAnswer = [];
    for (let i = 0; i < answerList.length; i++) {
        if (copyArray.includes(parseInt(answerList[i].value))) {
            correctAnswer.push(answerList[i].value)
            let index = copyArray.indexOf(answerList[i].value)
            copyArray.splice(index, 1)
        }
    }
    instructionAfterElement.classList.add('d-none')
    answerForm.classList.add('d-none')
    resultMessage.innerHTML = `hai indovinato ${correctAnswer.length} corrispondenze`
    if (correctAnswer.length > 0) {
        resultMessage.innerHTML += ` ovvero: ${correctAnswer}`
    }
})

function generateRandomArray(arrayLength) {
    let array = []
    for (let i = 0; i < (arrayLength); i++) {
        array[i] = getRandomInt(max);
        numbersList.innerHTML += `<li>${array[i]}</li>`
    }
    return array;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}