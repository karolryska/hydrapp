!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);document.querySelector(".wrapper").style.height="".concat(window.innerHeight,"px");var r,o=document.querySelector(".header__title"),c=document.querySelector(".counter__number"),i=document.querySelector(".content__history"),u=document.querySelector(".history__list"),a=document.querySelector(".button--add"),l=document.querySelector(".button--remove"),d=document.querySelector(".button-history"),s=(new Date).toISOString().slice(0,10),f=!1,y=function(){c.textContent=r},p=function(){localStorage.setItem(s,JSON.stringify(r))};JSON.parse(localStorage.getItem(s))?(r=JSON.parse(localStorage.getItem(s)),y()):(r=0,y()),a.addEventListener("click",(function(){r++,y(),p()})),l.addEventListener("click",(function(){r>=1&&r--,y(),p()})),d.addEventListener("click",(function(){i.classList.add("history--active"),f||(f=!0,function(){for(var e=Object.keys(JSON.parse(JSON.stringify(localStorage))),t=[],n=0;n<e.length;n++)e[n].includes("2020")&&t.push(e[n]);return t.sort((function(e,t){var n=new Date(e);return new Date(t)-n}))}().forEach((function(e){var t=JSON.parse(localStorage.getItem(e)),n=document.createElement("li"),r=document.createElement("p"),o=document.createElement("p");u.appendChild(n),n.appendChild(r),n.appendChild(o),n.classList.add("history__item"),r.classList.add("history__day"),o.classList.add("history__number"),r.textContent=e,o.textContent=t})))})),o.addEventListener("click",(function(){i.classList.remove("history--active")}))},function(e,t,n){}]);