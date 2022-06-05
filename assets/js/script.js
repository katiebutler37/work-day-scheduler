//Variable storing today's date
var currentDay = moment().format("dddd, MMMM Do YYYY");
//Display todays date in header
$("#currentDay").html(currentDay);

//current hour in 24 hr time format
var currentHour = moment().format("H");
console.log(currentHour);

var timeblockArray = [];
timeblockArray = document.querySelectorAll(".time-block");
//console.log(timeblockArray[3]);

var checkHour = function() {
    for (i = 0; i < timeblockArray.length; i++) {
        var hour = i + 9; 
        console.log(hour);
    
    // remove any old classes from element
    $(".description").removeClass("past present future");

        // apply new class if task is near/over due date
        if (hour < currentHour) {
            $(".description").addClass("future");
        }
        else if (hour == currentHour) {
            $(".description").addClass("present");
        }
        else if (hour > currentHour) {
            $(".description").addClass("past");
        };
    }; 
}; 

checkHour();