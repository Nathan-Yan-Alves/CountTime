let btnRestart = document.querySelector(".restart");
const day = localStorage.getItem("Day");
let dayDiv = document.querySelector(".days");
let hourDiv = document.querySelector(".hours");
let minDiv = document.querySelector(".minutes");
let secDiv = document.querySelector(".seconds");
let alarmEffect = new Audio("../assets/sounds/alarm-effect.mp3");
let timer;

function changeValues() {
    timer = setInterval(() => {
        endPoint();
        transformTimes();
    }, 1000);
}

function endPoint() {
    if (
        secDiv.textContent == 0 &&
        minDiv.textContent == 0 &&
        hourDiv.textContent == 0 &&
        dayDiv.textContent == 0
    ) {
        clearInterval(timer);
        alarmEffect.play();
        alert("Tempo concluído");
    }
}

function initializeValues() {
    dayDiv.textContent = day;
    hourDiv.textContent = 0;
    minDiv.textContent = 0;
    secDiv.textContent = 0;
}

function transformTimes() {
    if (dayDiv.textContent == day) {
        secDiv.textContent = 59;
        minDiv.textContent = 59;
        hourDiv.textContent = 23;
        dayDiv.textContent--;
    }

    if (hourDiv.textContent == 0) {
        hourDiv.textContent = 23;
        if (dayDiv.textContent != 0) {
            dayDiv.textContent--;
        }
    }

    if (minDiv.textContent == 0) {
        minDiv.textContent = 59;
        hourDiv.textContent--;
    }

    if (secDiv.textContent == 0) {
        secDiv.textContent = 60;
        minDiv.textContent--;
    }

    secDiv.textContent--;
}

document.addEventListener("DOMContentLoaded", () => {
    initializeValues();
    changeValues();
});

btnRestart.addEventListener("click", () => {
    location.href = "./index.html";
});
