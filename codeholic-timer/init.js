
const hoursSet = document.getElementById("hours");
const minutesSet = document.getElementById("minutes");
const secondsSet = document.getElementById("seconds");

const hoursCount = document.querySelector('.hour');
const minutesCount = document.querySelector('.minute');
const secondesCount = document.querySelector('.second');

const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let timeout;
let totalSeconds = 0;
let totalSecondsBackup = 0; 