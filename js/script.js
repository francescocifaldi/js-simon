const arrayLength = 5;
const max = 50;
const randomArray = document.getElementById('numbers-list');
const countdown = document.getElementById('countdown');
const countdownStart = 10;
const intervalInMs = 1000;
let tempoRimasto = countdownStart;

countdown.innerHTML=tempoRimasto;

const countdownID = setInterval(function (){
    -- tempoRimasto
    countdown.innerHTML=tempoRimasto;
}, intervalInMs)

setTimeout(function(){
    clearInterval(countdownID)
}, (countdownStart*intervalInMs))

function generateRandomArray (arrayLength){
    let array = []
    for(let i =0;i<(arrayLength);i++){
        array[i]=getRandomInt(max);
    }
    return array;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(generateRandomArray(arrayLength));