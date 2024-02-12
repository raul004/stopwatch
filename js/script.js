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

            minutesElement.textContent = minutes;
            secondsElement.textContent = seconds;
            milisecondsElement.textContent = miliseconds;
        }

    }, 10);
};