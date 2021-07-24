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

let interval;
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
    interval = setInterval(()=> {

        if(pause === true){
            return;
        }
        totalSeconds--;
        updateInputs();
        
        if(totalSeconds <= 0){
            stopTimer();
          }
    }, 1000)
}

function stopTimer(){
    interval = clearInterval(interval);
}

function updateInputs(){
    const hours = Math.floor(totalSeconds / 60 / 60);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondesCount.textContent = seconds;
    
}


// const countdown = () =>{
//     const countDate = new Date('August 10, 2021 00:00:00').getTime();
//     // console.log(countDate)
//     const now = new Date().getTime();
//     //console.log(now);
//     const gap = countDate - now;
//     // console.log(gap);

//     //how time works?
//     const millisecond = 1;
//     const second = millisecond * 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
//     // console.log(day)

//     //calc time
//     const textDay = Math.floor(gap/day);
//     // console.log(textDay);
//     const textHour = Math.floor((gap % day)/hour);
//     // console.log(textHour);
//     const textMinute = Math.floor((gap % hour)/minute);
//     const textSecond = Math.floor((gap % minute)/second);
//     const textMillisecond = Math.floor((gap % second) / millisecond)

//     document.querySelector(".day").innerText = textDay;
//     document.querySelector(".hour").innerText = textHour;
//     document.querySelector(".minute").innerText = textMinute;
//     document.querySelector(".second").innerText = textSecond;
//     document.querySelector(".millisecond").innerText = textMillisecond;
//     setTimeout(countdown, 1);
// }
// // setTimeout(countdown, 1000);
// countdown();