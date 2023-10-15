const date = new Date();

// dam elements
const weekdaysEL = document.getElementById('weekdays');
const monthEL = document.getElementById('month');
const yearEL = document.getElementById('year');
const hoursEL = document.getElementById('hours');
const minutesEL = document.getElementById('minutes');
const secondsEL = document.getElementById('seconds');

// date
const year = date.getYear();
const month = date.getMonth();
const weekdays = date.getweekdays();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

yearEL.innerText = year;
monthEL.innerText = month;
weekdaysEL.innerText = weekdays;
hoursEL.innerText = hours;
minutesEL.innerText = minutes;
secondsEL.innerText = seconds;



setInterval(() => {
    const date = new Date();
    secondsEL.innerText = date.getSeconds();
}, 1000);



// console.log(date.getweekdays(), date.getYear(), date.getMonth(), date.getHours(), date.getMinutes(), date.getSecounds());