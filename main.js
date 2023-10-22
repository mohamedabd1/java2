function updataclock(){

  var currenttime=new Date();

  var hours=currenttime.getHours();
  var ments=currenttime.getMinutes();
  var seconeds=currenttime.getSeconds();
  var time=hours<12?"AM":"PM ";
  hours=hours>12?hours-12:hours;

  hours=hours<10?"0"+hours:hours;
  ments=ments<10?"0"+ments:ments;
  seconeds=seconeds<10?"0"+seconeds:seconeds;
  

  document.getElementById("clock").innerHTML= hours+":"+ments+":"+seconeds+":"+time

}
setInterval(updataclock, 1000);

// stop watch
var startTime, elapsedTime = 0;
var timerInterval;

function start() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
    }
}

function stop() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function reset() {
    stop();
    elapsedTime = 0;
    updateTime();
}

function updateTime() {
    var currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    var formattedTime = formatTime(elapsedTime);
    document.getElementById("display").textContent = formattedTime;
}

function formatTime(time) {
    var hours = Math.floor(time / 3600000);
    var minutes = Math.floor((time % 3600000) / 60000);
    var seconds = Math.floor((time % 60000) / 1000);
    var milliseconds = Math.floor((time % 1000) / 10);

    return (
        ("0" + hours).slice(-2) +
        ":" +
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2) +
        "." +
        ("0" + milliseconds).slice(-2)
    );
}
