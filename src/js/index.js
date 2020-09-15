import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const wrapper = document.querySelector(".wrapper");
wrapper.style.height = `${window.innerHeight}px`;

const counter = document.querySelector(".counter__number");
const history = document.querySelector(".content__history");
const historyList = document.querySelector(".history__list");

const addButton = document.querySelector(".button--add");
const removeButton = document.querySelector(".button--remove");
const historyButton = document.querySelector(".button-history");

const today = new Date().toISOString().slice(0, 10);
let historyArray = [];
historyArray.push(today);

let counterNumber;


const counterReload = () => {
    counter.textContent = counterNumber;
}

if (JSON.parse(localStorage.getItem(today))) {
    counterNumber = JSON.parse(localStorage.getItem(today));
    counterReload();
} else {
    counterNumber = 0;
    counterReload();
}

const storageReload = () => {
    localStorage.setItem(today, JSON.stringify(counterNumber));
}

addButton.addEventListener("click", () => {
    counterNumber++;
    counterReload();
    storageReload();
})

removeButton.addEventListener("click", () => {
    if (counterNumber >= 1) counterNumber--;
    counterReload();
    storageReload();
})

historyButton.addEventListener("click", () => {
    history.classList.add("history--active");

    historyArray.forEach(day => {
        const amount = JSON.parse(localStorage.getItem(day));

        const historyItem = document.createElement("li");
        const historyDay = document.createElement("p");
        const historyNumber = document.createElement("p");

        historyList.appendChild(historyItem);
        historyItem.appendChild(historyDay);
        historyItem.appendChild(historyNumber);

        historyItem.classList.add("history__item");
        historyDay.classList.add("history__day");
        historyNumber.classList.add("history__number");

        historyDay.textContent = day;
        historyNumber.textContent = amount;
    });
})