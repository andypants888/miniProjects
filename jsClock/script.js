"use strict"
setInterval(setClock, 1000);

const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector('[minute-hand]');
const hourHand = document.querySelector('[hour-hand]');

console.log(secondHand)
console.log(minuteHand)


function setClock() {
    const now = new Date();
    const secs = now.getSeconds() / 60;
    const mins = now.getMinutes() / 60;
    const hours = now.getHours() / 12;
    console.log(`${hours} ${mins} ${secs}`)
    setRotation(secondHand, secs);
    setRotation(minuteHand, mins);
    setRotation(hourHand, hours);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

