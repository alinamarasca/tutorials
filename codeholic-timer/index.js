const hoursSet = document.getElementById("hours");
const minutesSet = document.getElementById("minutes");
const secondsSet = document.getElementById("seconds");

const hoursCount = document.querySelector('.hour');
const minutesCount = document.querySelector('.minute');
const secondesCount = document.querySelector('.second');

const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let timeout;
let pause = false;
let totalSeconds = 0;
let totalSecondsBackup = 0; 

init();

function init(){
    pauseBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    resetBtn.style.display = 'none';

    startBtn.addEventListener ('click',()=>{
        const hours = parseInt(hoursSet.value);
        const minutes = parseInt(minutesSet.value);
        const seconds = parseInt(secondsSet.value);
    
        totalSecondsBackup = totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;
        if(totalSeconds <= 0){
        return;
    }

    startTimer();

    pauseBtn.style.display = 'inline-block';
    stopBtn.style.display = 'inline-block';
    resetBtn.style.display = 'inline-block';
    startBtn.style.display = 'none';
});

pauseBtn.addEventListener('click', ()=>{
    pause = !pause;
    if (pause){
        
        pauseBtn.innerText = 'Resume';
        } else {
        pauseBtn.innerText = 'Pause';
        startTimer();
    }
    
})

stopBtn.addEventListener('click', ()=>{
    stopTimer();
    totalSeconds = totalSecondsBackup;
    pause = false;
    updateInputs();

    pauseBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    resetBtn.style.display = 'none';
    startBtn.style.display = '';
})

resetBtn.addEventListener('click', () => { //doesn't work
    totalSeconds = totalSecondsBackup;
    updateInputs();
    })
}

function startTimer(){
        if(pause === true){
            return;
        }
        totalSeconds--;
        updateInputs();
        
        if(totalSeconds <= 0){
            stopTimer();
          }
    timeout = setTimeout( startTimer, 1000)
}

function stopTimer(){
    timeout = clearTimeout(timeout);
}

function updateInputs(){
    const hours = Math.floor(totalSeconds / 60 / 60);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondesCount.textContent = seconds;
    
}
