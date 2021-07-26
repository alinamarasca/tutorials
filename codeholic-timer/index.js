const hoursSet = document.getElementById("hours");
const minutesSet = document.getElementById("minutes");
const secondsSet = document.getElementById("seconds");

const hoursCount = document.querySelector('.hour');
const minutesCount = document.querySelector('.minute');
const secondesCount = document.querySelector('.second');

const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const setBtn = document.querySelector('.set-btn');


let timeout;
let pause = false;
let totalSeconds = 0;
let totalSecondsBackup = 0; 
let timeIsSet = false;

//listen-handle

const setTime = () => {
        const hours = parseInt(hoursSet.value);
        const minutes = parseInt(minutesSet.value);
        const seconds = parseInt(secondsSet.value);
        totalSecondsBackup = totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;
        timeIsSet = true;
        console.log(totalSecondsBackup)
    }

setBtn.addEventListener('click', setTime)

resetBtn.addEventListener('click', () => { 
    hoursCount.innerText = '00';
    minutesCount.innerText = '00';
    secondesCount.innerText = '00';
    clearInterval(timeout);
    })

const startTimer = () => {

    if(timeIsSet === !true){
            return;
        } else {
        totalSeconds--;
        updateInputs();
        
        if(totalSeconds <= 0){
            stopTimer();
          }
    timeout = setTimeout( startTimer, 1000)
}
}


startBtn.addEventListener('click', startTimer);


stopTimer = () => {
    timeout = clearTimeout(timeout);
}

const updateInputs= () => {
    const hours = Math.floor(totalSeconds / 60 / 60);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondesCount.textContent = seconds;
    
}
