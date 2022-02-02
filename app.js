// js file
const day=document.querySelector('.day');
const hour=document.querySelector('.hour');
const minute=document.querySelector('.minute');
const second=document.querySelector('.second');



// function counter

const counter =()=>{
    const countNow= new Date("April 2,2022 7:00:00").getTime();
    const now = new Date().getTime();
    let gap = countNow-now;
    
    // calculations
    let seconds=1000;
    let minutes= seconds*60;
    let hours= minutes*60;
    let days= hours*24;
    
    let txtDays= Math.floor(gap/days);
    let txtHour= Math.floor((gap%days)/hours);
    let txtMinute= Math.floor((gap%hours)/minutes);
    let txtSecond= Math.floor((gap%minutes)/seconds);
    
    // appends
    day.innerHTML=txtDays;
    hour.innerHTML=txtHour;
    minute.innerHTML=txtMinute;
    second.innerHTML=txtSecond;
  
  
    
    
}

setInterval(counter,1000)

