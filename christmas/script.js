const daysEL = document.getElementById('days');   
const hoursEL = document.getElementById('hours'); 
const minsEL = document.getElementById('mins'); 
const secondsEL = document.getElementById('seconds'); 

const noelEve = "24 Dec 2023";

function countdown(){
    const noelEveDate = new Date(noelEve);
    const currentDate = new Date();

    const total = (noelEveDate.getTime() - currentDate) / 1000; 

    const days = Math.floor(total / 3600 / 24);
    const hours = Math.floor(total / 3600) % 24;
    const mins = Math.floor(total / 60) % 60;
    const seconds = Math.floor(total) % 60;

daysEL.innerHTML = days;
hoursEL.innerHTML = formatTime(hours);
minsEL.innerHTML = formatTime(mins);
secondsEL.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);