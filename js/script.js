const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const milisecondsElement = document.querySelector('[data-miliseconds]');

const startBtn = document.querySelector('[data-start]');
const pauseBtn = document.querySelector('.pause-btn');
const resumeBtn = document.querySelector('.resume-btn');
const restartBtn = document.querySelector('.restart-btn');

let interval;

let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);

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

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
};

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
};