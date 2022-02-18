// Dom elements decleration
const hoursHand = document.querySelector(".hours-hand");
const minutesHand = document.querySelector(".minutes-hand");
const secondsHand = document.querySelector(".seconds-hand");

// Current time decleration
const now = new Date();
const nowHour = now.getHours() - 12;
const nowMinutes = now.getMinutes();
const nowSeconds = now.getSeconds();

// Hands Initialization
let nowHourDeg = -90 + nowHour * 30;
hoursHand.style.transform = `translate(0, -50%) rotate(${nowHourDeg}deg)`;

let nowMinutesDeg = -90 + nowMinutes * 6;
minutesHand.style.transform = `translate(0, -50%) rotate(${nowMinutesDeg}deg)`;

let nowSecondsDeg = -90 + nowSeconds * 6;
secondsHand.style.transform = `translate(0, -50%) rotate(${nowSecondsDeg}deg)`;

// Rendering hands positions dynmically
setInterval(function () {
  nowHourDeg += 6;
  hoursHand.style.transform = `translate(0, -50%) rotate(${nowHourDeg}deg)`;
}, 3600000);

setInterval(function () {
  nowMinutesDeg += 6;
  secondsHand.style.transform = `translate(0, -50%) rotate(${nowMinutesDeg}deg)`;
}, 60000);

setInterval(function () {
  nowSecondsDeg += 6;
  secondsHand.style.transform = `translate(0, -50%) rotate(${nowSecondsDeg}deg)`;
}, 1000);
