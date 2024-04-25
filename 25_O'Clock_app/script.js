const breakDecrement = document.getElementById("breakDecrement");
const breakIncrement = document.getElementById("breakIncrement");
const breakLength = document.getElementById("breakLength");
const sessionDecrement = document.getElementById("sessionDecrement");
const sessionIncrement = document.getElementById("sessionIncrement");
const sessionLength = document.getElementById("sessionLength");
const timeLeft = document.getElementById("timeLeft");
const startStop = document.getElementById("startStop");
const reset = document.getElementById("reset");
const arrows = document.querySelectorAll(".arrows");
let isTimerRunning = false;
let sessionCountdown = 25;
let breakCountdown = 5;
let countdownInterval;

const clock = (time) => {
    formattedTime(time);
    sessionLength.innerText = sessionCountdown;
    breakLength.innerText = breakCountdown;
    decrementOrIncrementEventListeners();
    reset.addEventListener("click", resetInterval);
    startStop.addEventListener("click", () => {
         isTimerRunning = !isTimerRunning;
         if(isTimerRunning) {
             startStop.innerHTML = '<i class="fa-solid fa-pause"></i>';
             timeRun(sessionCountdown * 60);
             removeEventListeners();
             return;
         } 
         startStop.innerHTML = '<i class="fa-solid fa-play"></i>' 
         clearInterval(countdownInterval);
         decrementOrIncrementEventListeners();
     })
 }
 
const decrementOrIncrementEventListeners = () => {
    breakIncrement.addEventListener("click", breakIncrementFunc);
    breakDecrement.addEventListener("click", breakDecrementFunc);   
    sessionIncrement.addEventListener("click", sessionIncrementFunc);
     sessionDecrement.addEventListener("click", sessionDecrementFunc);
}

const removeEventListeners = () => {
    breakIncrement.removeEventListener("click", breakIncrementFunc);
    breakDecrement.removeEventListener("click", breakDecrementFunc);   
    sessionIncrement.removeEventListener("click", sessionIncrementFunc);
     sessionDecrement.removeEventListener("click", sessionDecrementFunc);
}


const breakIncrementFunc = () => {
    if ( breakCountdown > 59) {return}
    breakCountdown++;
     breakLength.innerText = breakCountdown;
}
const breakDecrementFunc = () => {
    if (breakCountdown < 1) {return}
     breakCountdown--;
     breakLength.innerText = breakCountdown;
}
const sessionIncrementFunc = () => {
    if (sessionCountdown > 59) {return}
    sessionCountdown++;
    sessionLength.innerText = sessionCountdown;
}
const sessionDecrementFunc = () => {
    if (sessionCountdown < 1) {return}
      sessionCountdown--;
      sessionLength.innerText = sessionCountdown;
}

const timeRun = (time) => {
    startTime = Date.now();
    countdownInterval = setInterval(() => {
        formattedTime(time);
        if (time <= 0) {
            time = breakCountdown * 60;
        } else {
            time--;
        }
    }, 1000); 
} 

const resetInterval = () => {
    clearInterval(countdownInterval)
    let timer = 25 * 60;
    formattedTime(timer);
    breakLength.innerText = 5;
    sessionLength.innerText = 25;
    startStop.innerHTML = '<i class="fa-solid fa-play"></i>' 
}

const formattedTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = (time % 60);
    timeLeft.innerText = (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
}

clock(sessionCountdown * 60);

