const arrayLength = 5;
const max = 50;
const randomArray = document.getElementById('numbers-list');
const countdown = document.getElementById('countdown');
const countdownStart = 10;
let tempoRimasto = countdownStart;

const countdownID = setInterval(function (){
    countdown.innerHTML=tempoRimasto;
    -- tempoRimasto
}, 1000)

setTimeout(function(){
    clearInterval(countdownID)
}, (countdownStart*1000))

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