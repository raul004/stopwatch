const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const milisecondsElement = document.querySelector('[data-miliseconds]');

const startBtn = document.querySelector('[data-start]');
const pauseBtn = document.querySelector('.pause-btn');
const resumeBtn = document.querySelector('.resume-btn');
const resetBtn = document.querySelector('.reset-btn');

let interval;

let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {

    interval = setInterval(() => {

        if (!isPaused) {

            miliseconds += 10;

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesElement.textContent = formatTime(minutes);
            secondsElement.textContent = formatTime(seconds);
            milisecondsElement.textContent = formatMilliseconds(miliseconds);
        }
    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
};

function pauseTimer() {
    isPaused = true;

    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false;

    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);
    isPaused = false;

    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    milisecondsElement.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
};

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
};