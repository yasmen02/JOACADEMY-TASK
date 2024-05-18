const currentTime = document.querySelector('h1'),
content = document.querySelector('.content')
 selectMenu = document.querySelectorAll('select'),
 setAlarmbtn =document.querySelector("button");
let alarmTime, isAlarmSet=false;
const audio = document.getElementById('myAudio');

for (let i = 12; i > 0; i--) {
    i = i<10 ? "0" +i: i;
    let option =`<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
for (let i = 59; i >= 0; i--) {
    i = i<10 ? "0" +i: i;
    let option =`<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}for (let i = 2; i > 0; i--) {
  let amPm= i ==1 ?"AM" : "PM"
    let option =`<option value="${amPm}">${amPm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
}
// setInterval(() => {
    
//     let date= new Date(),
//     h= date.getHours(),
//     m= date.getMinutes(),
//     s= date.getSeconds(),
//     amPm="AM";
//     if (h>= 12){
//         h= h-12;
//         amPm="PM";
//     }
//     h= h==0 ? h=12 :h;
//     h= h<10 ? "0"+h:h;
//     m= m<10 ? "0"+m:m;
//     s= s<10 ? "0"+s:s;
//   currentTime.innerHTML=`${h}:${m}:${s}:${amPm}`;

//   if(alarmTime && isAlarmSet == currentTime){
//     console.log("playing audio");
//     audio.play();
//     audio.loop =true;   
//   }
// }, 1000);
setInterval(() => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s= date.getSeconds(),
        amPm = "AM";
        
    if (h >= 12) {
        h = h - 12;
        amPm = "PM";
    }
    h = h == 0 ? 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s= s<10 ? "0"+s:s;
    
    let currentTimeString = `${h}:${m}:${s}:${amPm}`;
    currentTime.innerHTML = currentTimeString;

    console.log("Current Time:", currentTimeString);
    console.log("Alarm Time:", alarmTime);

    // Check if the alarm is set and the current time matches the alarm time
    if (isAlarmSet && alarmTime == currentTimeString) {
        console.log("Playing audio...");
        audio.play();
        audio.loop = true;
    }
}, 1000);


function setAlarm(){
if(isAlarmSet){
    alarmTime ="";
    audio.pause();
    content.classList.remove("disable");
    setAlarmbtn.innerText = "set Alarm";
return isAlarmSet =false;
}


    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`
if(time.includes("Hour")|| time.includes("Minutes")||time.includes("PM/AM")){
    return alert("please select a valid time to set alarm!");
}
isAlarmSet=true;
alarmTime =time;
content.classList.add("disable");
setAlarmbtn.innerText = "Clear Alarm";
}
setAlarmbtn.addEventListener("click",setAlarm)