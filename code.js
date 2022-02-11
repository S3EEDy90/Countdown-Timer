const newYearDate = "1 Jan 2023"; // The Target Date

const daysEl= document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl= document.getElementById("seconds");


function countdown (){
    const newYear = new Date(newYearDate);
    const currentTime = new Date();
    
    const totallSeconds = (newYear - currentTime) / 1000;
    const days= Math.floor(totallSeconds/3600/24) ;
    const hours=Math.floor(totallSeconds/3600) % 24 ;
    const mins= Math.floor(totallSeconds/60) % 60;  
    const seconds= Math.floor(totallSeconds) % 60 ;

    daysEl.innerHTML= days;
    hoursEl.innerHTML= formatTime(hours);
    minsEl.innerHTML= formatTime(mins);
    secondsEl.innerHTML= formatTime(seconds);
}

function formatTime (time) {
return time < 10 ? (`0${time}`): time;

}

countdown();
setInterval(countdown,1000);

