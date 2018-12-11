function clockTime() {
    var time = new Date();
    var hours = time.getHours();
    var minute = time.getMinutes();
    if (minute <= 9) {
        minute = "0" + minute;
    }
    var second = time.getSeconds();
    if (second <= 9) {
        second = "0" + second;
    }
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minute').innerHTML = minute;
    document.querySelector('#second').innerHTML = second;
}
// setInterval(clockTime(), 1000);
setInterval(function () { clockTime(); }, 1000);