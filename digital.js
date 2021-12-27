const time12 = document.querySelector("#twelve-hour-time");
const time24 = document.querySelector("#twenty-four-hour-time");
const btn = document.querySelector("#switchFormat");

btn.addEventListener("click", ()=>{
     time12.classList.toggle('hide');
     time24.classList.toggle('hide');
} )


     const hr = document.querySelector("#hours");
     const min = document.querySelector("#minutes");
     const sec = document.querySelector("#seconds");
     const tformat = document.querySelector("#timeFormat");
     const hr24 = document.querySelector("#twenty-four-hours");
     const min24 = document.querySelector("#twenty-four-minutes");
     const sec24 = document.querySelector("#twenty-four-seconds");
     
function digitaTime12(){
     const currentDate = new Date ();
     let hrs = currentDate.getHours();
    let mins = currentDate.getMinutes();
    let secs = currentDate.getSeconds();
     let hrTime = hrs > 12 ? hrs - 12 : hrs;
let timeFormat = hrs>=12?"PM":"AM";
 hr.innerHTML = `${hrTime}:`;
min.innerHTML = `${mins}:`;
sec.innerHTML = `${secs}:`;
tformat.innerHTML = `${timeFormat}`;}
setInterval(digitaTime12,1000);

function digitaTime24(){   
     const currentDate = new Date ();
     let hrs = currentDate.getHours();
    let mins = currentDate.getMinutes();
    let secs = currentDate.getSeconds();
    hr24.innerHTML=`${hrs}:`;
    min24.innerHTML=`${mins}:`;
    sec24.innerHTML=`${secs}`;   
}
setInterval(digitaTime24,1000);

