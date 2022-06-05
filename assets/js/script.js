//Variable storing today's date
var currentDay = moment().format("dddd, MMMM Do YYYY");
//Display todays date in header
$("#currentDay").html(currentDay);

var currentHour = moment().format("H");
console.log(currentHour);

//var description = 

var checkHour = function() {
    var hour = $(".24hr").find("id").text().trim();
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
    }
}; 

checkHour();