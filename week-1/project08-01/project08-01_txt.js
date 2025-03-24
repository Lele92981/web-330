"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Leah Thames
      Date: 3/23/25

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

const timer = function(min, sec) {
    let minutes = min;
    let seconds = sec;
    let timerID = null;
    let running = false;

    function runPause()
    {
      if (running)
      {
        clearInterval(timerID);
        running = false;
      }
      else
      {
        timerID = setInterval(updateTime, 1000);
        running = true;
      }
    }

    if else
    function stop() {
      if (timerID !== null) {
        clearInterval(timerID);
        running = false;
      }
    }
    function timeID()
    {
      return timerID;
    }

    function updateTime()
    {
      if (seconds > 0)
      {
        seconds--;
      }
      else if (minutes > 0)
      {
        minutes--;
        seconds = 59;
      }
      else
      {
        clearInterval(timerID);
        running = false;
      }
      minBox.value = minutes;
      secBox.value = seconds;
    }

    function reset()
    {
      clearInterval(timerID);
      minutes = 0;
      seconds = 0;
      minBox.value = minutes;
      secBox.value = seconds;
    }

    if (timerID !== null) {
      clearInterval(timerID);
    }

    window.addEventListener("unload", function()
    {
      if (running)
      {
        clearInterval(timerID);
      }
    });

    function startTimer()
    {
      timerID = setInterval(updateTime, 1000);
    }

    const timer.timerID = setInterval(updateTime, 1000);

    if (timerID !== null) {
      clearInterval(timerID);
    }

    if else (timerID !== null) {
      clearInterval(timerID);
    }

    return {
      runPause: runPause,
      stop: stop,
      reset: reset,
      timeID: timeID
    };
} (0, 0);






/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

