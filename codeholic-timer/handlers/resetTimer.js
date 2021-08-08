import "../handlers/init.js";

export const resetTimer = () => { 
    clearTimeout(timeout);
    totalSeconds = 0;
    updateInputs();
    hoursCount.textContent = "00";
    minutesCount.textContent = "00";
    secondesCount.textContent = "00";
    }