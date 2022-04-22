// Count Down Repo is been imported here
import { countDownRepo } from "./utils.js";

// A formated Date to get the new year eve
const newYears = "29 May " + (new Date().getFullYear());

// The function does the logic of calculating days, hours, minutes and seconds
function countDown() {
    "use strict";
    // The newYearDate will always give the exact date to the new Years eve
    const newYearsDate = new Date(newYears);
    // The current Date 
    const currentDate = new Date();

    // total seconds
    // To get the time remaining before the new year eve:
    // The new Years Date have to be deducted from the current Date 
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    // return days
    const days = Math.floor(totalSeconds / 3600 / 24);

    // return hours
    const hours = Math.floor(totalSeconds / 3600) % 24;

    // return minutes
    const minutes = Math.floor(totalSeconds / 60) % 60;

    // return seconds
    const seconds = Math.floor(totalSeconds) % 60;

    // ===============================================================
    // Calling the countDownRepo to make changes to the web page
    // ===============================================================
    countDownRepo().days(days);
    countDownRepo().hours(hours);
    countDownRepo().mins(countDownRepo().formatTime(minutes));
    countDownRepo().seconds(countDownRepo().formatTime(seconds));
    // ============================================================
}

// The setInterval here call the countDown as give it an interval of 1000 which make it real time
setInterval(countDown, 1000);