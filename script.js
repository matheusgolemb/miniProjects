function putZero(time) {
    if(time < 10) {
        time = "0" + time
    }
    return time;
}

function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours()
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById("session");

    if(hrs >=12) {
        session.innerHTML = "PM"
    }else {
        session.innerHTML = "AM"
    }
    hrs = putZero(hrs);
    min = putZero(min);
    sec = putZero(sec);


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayTime, 10);