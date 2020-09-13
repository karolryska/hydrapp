import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const wrapper = document.querySelector(".wrapper");
wrapper.style.height = `${window.innerHeight}px`;

const counter = document.querySelector(".counter__number");

const addButton = document.querySelector(".button--add");
const removeButton = document.querySelector(".button--remove");

const today = new Date().toISOString().slice(0, 10);

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