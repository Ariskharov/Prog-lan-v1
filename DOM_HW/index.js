const counterDisplay = document.getElementById('counterDisplay');
const speedPlusBtn = document.getElementById('speedPlus');
const speedMinusBtn = document.getElementById('speedMinus');
const resetBtn = document.getElementById('resetBtn');
const body = document.body;

let counter = 0;
let intervalId = null;
let speed = 1000;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    counterDisplay.textContent = formatTime(counter);
}

function startCounter() {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
        counter++;
        updateDisplay();
    }, speed);
}

function stopCounter() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resetStyles() {
    body.className = '';
    counterDisplay.className = 'counter-display';
}

speedPlusBtn.addEventListener('click', function() {
    stopCounter();
    speed = Math.max(100, speed - 200);
    resetStyles();
    body.classList.add('speed-plus-active');
    startCounter();
    console.log('Speed + активирован. Новая скорость:', speed + 'мс');
});

speedMinusBtn.addEventListener('click', function() {
    stopCounter();
    speed = Math.min(5000, speed + 200);
    resetStyles();
    body.classList.add('speed-minus-active');
    startCounter();
    console.log('Speed - активирован. Новая скорость:', speed + 'мс');
});

resetBtn.addEventListener('click', function() {
    stopCounter();
    counter = 0;
    speed = 1000;
    resetStyles();
    body.classList.add('reset-active');
    updateDisplay();
    console.log('Reset активирован. Счетчик сброшен.');
});

document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
    console.log('Счетчик инициализирован. Начальное состояние: 00:00, серый фон');
});
