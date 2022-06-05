//Variable storing today's date
var currentDay = moment().format("dddd, MMMM Do YYYY");
//Display todays date in header
$("#currentDay").html(currentDay);

//current hour in 24 hr time format
var currentHour = moment().format("H");
console.log(currentHour);

$(".24hr").each(function(){
    var hour = $(this).text();
    console.log(hour[0]);
});

// $(".time-block").each(function(hour) {
//     hour = $(".24hr").text();
//     $(".description").removeClass("past present future");

//     // apply new class if task is near/over due date
//     if (hour < currentHour) {
//         $(".description").addClass("future");
//     }
//     else if (hour == currentHour) {
//         $(".description").addClass("present");
//   }
//     else if (hour > currentHour) {
//         $(".description").addClass("past");
//     } 
// });

var checkHour = function() {
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

checkHour();