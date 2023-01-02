window.onload = function () {
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  let startButton = document.getElementById("start");
  let stopButton = document.getElementById("stop");
  let resetButton = document.getElementById("reset");
  let interval;

  startButton.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  stopButton.onclick = function () {
    clearInterval(interval);
  };

  resetButton.onclick = function () {
    clearInterval(interval);
    minutesString = 0;
    milliSecondsString = 0;
    secondsString = 0;
  };

  function startTimer() {
    milliseconds++;

    if (milliseconds == 100) {
      seconds = seconds + 1;
      milliseconds = 0;
    }
    if (seconds == 60) {
      minutes = minutes + 1;
      seconds = 0;
    }

    let minutesString = minutes;
    let secondsString = seconds;
    let milliSecondsString = milliseconds;

    if (minutesString < 10) {
      minutesString = "0" + minutesString;
    }
    if (secondsString < 10) {
      secondsString = "0" + secondsString;
    }
    if (milliSecondsString < 100) {
      if (milliSecondsString < 10) {
        milliSecondsString = "0" + milliSecondsString;
      }
    }

    document.getElementById("minutes").innerHTML = minutesString;
    document.getElementById("seconds").innerHTML = secondsString;
    document.getElementById("milliseconds").innerHTML = milliSecondsString;
  }
};
