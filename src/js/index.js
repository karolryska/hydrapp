import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const wrapper = document.querySelector(".wrapper");

const headerTitle = document.querySelector(".header__title");
const menuButton = document.querySelector(".header__menu-button");

const nav = document.querySelector(".nav");

const counter = document.querySelector(".counter__number");

const history = document.querySelector(".section--history");
const settings = document.querySelector(".section--settings");

const addButton = document.querySelector(".button--add");
const removeButton = document.querySelector(".button--remove");

const historyLink = document.querySelector(".nav__link--history");
const settingsLink = document.querySelector(".nav__link--settings");

const backButtonHistory = document.querySelector(".section__arrow--history");
const backButtonSettings = document.querySelector(".section__arrow--settings");

wrapper.style.height = `${window.innerHeight}px`;
nav.style.height = `${window.innerHeight}px`;


const today = new Date().toISOString().slice(0, 10);
let counterNumber;
let historyLoad = false;

const counterReload = () => {
    counter.textContent = counterNumber;
}

const storageReload = () => {
    localStorage.setItem(today, JSON.stringify(counterNumber));
}

const goToSection = (section, klasa) => {
    section.classList.toggle(klasa);
    nav.classList.toggle("nav--active");
    menuButton.classList.toggle("is-active");
}

const historyDates = () => {
    const storageKeys = Object.keys(JSON.parse(JSON.stringify(localStorage)));
    let storageDatesOnly = [];
    for (let i = 0; i < storageKeys.length; i++) {
        if (storageKeys[i].includes("2020")) storageDatesOnly.push(storageKeys[i]);
    }
    return storageDatesOnly.sort((a, b) => {
        const dateA = new Date(a);
        const dateB = new Date(b);
        return dateB - dateA;
    });
}

if (JSON.parse(localStorage.getItem(today))) {
    counterNumber = JSON.parse(localStorage.getItem(today));
    counterReload();
} else {
    counterNumber = 0;
    counterReload();
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

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("is-active");
    nav.classList.toggle("nav--active");
});

historyLink.addEventListener("click", () => {
    goToSection(history, "history--active");

    if (!historyLoad) {
        historyLoad = true;

        historyDates().forEach(day => {

            const amount = JSON.parse(localStorage.getItem(day));

            const historyList = document.querySelector(".history__list");
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
    }
})

settingsLink.addEventListener("click", () => {
    goToSection(settings, "settings--active");
})

backButtonHistory.addEventListener("click", () => {
    history.classList.toggle("history--active");
})
backButtonSettings.addEventListener("click", () => {
    settings.classList.toggle("settings--active");
})