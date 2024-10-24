const arrayLength = 5;
const max = 50;

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