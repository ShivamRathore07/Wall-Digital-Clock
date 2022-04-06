function toggleClass(){
const body = document.querySelector("body");
body.classList.toggle("light");
}


const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    let hour = document.querySelector("#hour")
    let min = document.querySelector("#minutes")
    let sec = document.querySelector("#seconds")
    let amp = document.querySelector("#ampm")

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    if(h > 12){
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s


    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    amp.innerHTML = am;

    let day2 = day.getDay()
    let mon = day.getMonth()
    let date = day.getDate()
    let year = day.getFullYear()

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let ids = ["dayname","month","daynum","year"]
    let value = [week[day2],months[mon],date,year]
    for(let i=0; i<ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = value[i];
    }

})

