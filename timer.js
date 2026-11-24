let timer;
let isStarted = false;
let hour = 0;
let minute = 0;
let second = 0;

let startTimer = () => {
  hour = isStarted ? hour : Number(document.getElementById("hour").value);
  minute = isStarted ? minute : Number(document.getElementById("minute").value);
  second = isStarted ? second : Number(document.getElementById("second").value);
  isStarted = true;
  timer = setInterval(() => {
    if (second > 0) {
      second--;
    } else if (minute > 0) {
      minute--;
      second = 59;
    } else if (hour > 0) {
      hour--;
      minute = 59;
      second = 59;
    } else {
      clearInterval(timer);
    }
    document.getElementById(
      "timer",
    ).textContent =
      String(hour).padStart(2, "0") +
      ":" +
      String(minute).padStart(2, "0") +
      ":" +
      String(second).padStart(2, "0");
  }, 1000);
};
const stopTimer = () => {
  clearInterval(timer);
};
const resetTimer = () => {
  clearInterval(timer);
  hour = 0;
  minute = 0;
  second = 0;

  document.getElementById("hour").value = "";
  document.getElementById("minute").value = "";
  document.getElementById("second").value = "";

  document.getElementById("timer").textContent = "00:00:00";
  isStarted = false;
}
let time;
let seconds = 0;
let minutes = 0;
let hours = 0;

startClock = () => {
    if (time != null) {
        return;
    }
    time = setInterval(() => {
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes == 60) {
            minutes= 0;
            hours++;
        }

        document.getElementById("time").textContent=
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

    }, 1000);
}

const stopClock = () => {
    clearInterval(time);
    time = null
}
const resetTimer2 = () => {
  clearInterval(time);
  time= null
  hours = 0;
  minutes = 0;
  seconds = 0;
document.getElementById("time").textContent = "00:00:00";
}

let odootsag = document.getElementById("timers");

const now = new Date();

let hour1 = now.getHours();
let minute1 = now.getMinutes();
let second1 = now.getSeconds();

let hervee = () => {
    second1++;

    if (second1 === 60) {
        second1 = 0;
        minute1++;
    }

    if (minute1 === 60) {
        minute1 = 0;
        hour1++;
    }

    if (hour1 === 24) {
        hour1 = 0;
    }

    odootsag.textContent =
        String(hour1).padStart(2, "0") + ":" +
        String(minute1).padStart(2, "0") + ":" +
        String(second1).padStart(2, "0");
};

hervee();
setInterval(hervee, 1000);
//    const stopWorld = () => {
//     clearInterval(interval)
//    }
    