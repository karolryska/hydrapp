!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(0);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var r=document.querySelector(".wrapper"),o=(document.querySelector(".header__title"),document.querySelector(".header__menu-button")),c=document.querySelector(".nav"),i=document.querySelector(".counter__number"),a=(document.querySelector(".counter__unit"),document.querySelector(".section--history")),u=document.querySelector(".section--settings"),l=document.querySelector(".button--add"),s=document.querySelector(".button--remove"),d=document.querySelector(".nav__link--history"),g=document.querySelector(".nav__link--settings"),f=document.querySelector(".arrow--history"),y=document.querySelector(".arrow--settings"),m=document.querySelector(".hamburger__inner");r.style.height="".concat(window.innerHeight,"px"),c.style.height="".concat(window.innerHeight,"px");var S,v={glass:200,goal:12},p=(new Date).toISOString().slice(0,10),_=!1,h=function(){i.textContent=S},b=function(){localStorage.setItem(p,JSON.stringify(S))},q=function(e,t){e.classList.toggle(t),c.classList.toggle("nav--active"),m.classList.toggle("hamburger__inner--active")};JSON.parse(localStorage.getItem("userSettings"))?v=JSON.parse(localStorage.getItem("userSettings")):console.log("brak ustawien"),JSON.parse(localStorage.getItem(p))?(S=JSON.parse(localStorage.getItem(p)),h()):(S=0,h()),l.addEventListener("click",(function(){S++,h(),b()})),s.addEventListener("click",(function(){S>=1&&S--,h(),b()})),o.addEventListener("click",(function(){m.classList.toggle("hamburger__inner--active"),c.classList.toggle("nav--active")})),d.addEventListener("click",(function(){q(a,"history--active"),_||(_=!0,function(){for(var e=Object.keys(JSON.parse(JSON.stringify(localStorage))),t=[],n=0;n<e.length;n++)e[n].includes("2020")&&t.push(e[n]);return t.sort((function(e,t){var n=new Date(e);return new Date(t)-n}))}().forEach((function(e){var t=JSON.parse(localStorage.getItem(e)),n=document.querySelector(".history__list"),r=document.createElement("li"),o=document.createElement("p"),c=document.createElement("p");n.appendChild(r),r.appendChild(o),r.appendChild(c),r.classList.add("history__item"),o.classList.add("history__day"),c.classList.add("history__number"),o.textContent=e,c.textContent=t})))})),g.addEventListener("click",(function(){q(u,"settings--active"),document.querySelector(".form__input--glassCapacity").value=v.glass,document.querySelector(".form__input--dailyGoal").value=v.goal})),f.addEventListener("click",(function(){a.classList.toggle("history--active")})),y.addEventListener("click",(function(){u.classList.toggle("settings--active"),v.glass=document.querySelector(".form__input--glassCapacity").value,v.goal=document.querySelector(".form__input--dailyGoal").value,localStorage.setItem("userSettings",JSON.stringify(v))}))}]);