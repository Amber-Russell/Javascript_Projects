function countdown() {
    var seconds = document.getElementById("{seconds").nodeValue;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds== -1) {
        alert("Times up!");
    }
    }
    tick();
}