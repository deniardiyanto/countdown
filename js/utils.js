/*****************************************************
 The function below signifies the art of design pattern. 
 This function manupulate some part of the page, in a nutshell it 
 a bunch of utils that is used in data manipulation
****************************************************/
/**************************************************************
 The design pattern used below is called module pattern which is part of
 the creational design pattern. 
*****************************************************************/

function countDownRepo(){
    return {
        // The is a method that change the days data in the html document
        days: function(day){
            const days = document.getElementById("days");
            days.innerHTML = day;
        },
        // The is a method that change the hours data in the html document
        hours: function(hour){
            const hours = document.getElementById("hours");
            hours.innerHTML = hour;
        },
        // The is a method that change the minutes data in the html document
        mins: function(min){
            const mins = document.getElementById("mins");
            mins.innerHTML = min;
        }, 
        // The is a method that change the seconds data in the html document
        seconds: function(second){
            const seconds = document.getElementById("secs");
            seconds.innerHTML = second;
        },
        // The is a method that change format time in the html document
        formatTime: function(time){
            return time < 10 ? `${"0" + time}`: time;
        }
    };
}

// CountDown Repo is been exported here
export {countDownRepo};