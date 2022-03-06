
const stopwatch = document.querySelector("#stopwatch");
let milliseconds =0;
let timer;

function startTime(){
    stopwatch.style.color = "#0f62fe";
    clearInterval(timer);
    timer = setInterval(()=>{
        milliseconds += 10;

        let dateTimer = new Date(milliseconds);

        stopwatch.innerHTML = 
        ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
      }, 10);
    }

function pauseTime(){
    stopwatch.style.color = "red";
    clearInterval(timer);
}

function resetTime(){
    setInterval(timer)
    milliseconds = 0;
    stopwatch.innerHTML = "00:00:00:00";
}

document.addEventListener('click',(e)=>{
    const el = e.target;

    if (el.id === "start") startTime();
    if (el.id === "pause") pauseTime();
    if (el.id === "reset") resetTime();

})