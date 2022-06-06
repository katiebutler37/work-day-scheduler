//Variable storing today's date
var currentDay = moment().format("dddd, MMMM Do YYYY");
//Display todays date in header
$("#currentDay").html(currentDay);

//current hour in 24 hr time format
var currentHour = moment().format("H");
console.log(currentHour);

var timeEl;

var timeblockNodeList = document.querySelectorAll(".time-block");

var checkHour = function() {
    for (i = 0; i < timeblockNodeList.length; i++) {
        var hour = i + 9;
        var timeEl = timeblockNodeList[i];
       
         // get date from task element
  // ensure it worked
  console.log(hour); 
    
    // remove any old classes from element
    $(timeEl).find("textarea").removeClass("past present future");

        // apply new class if task is near/over due date
        if (hour > currentHour) {
            $(timeEl).find("textarea").addClass("future");
        }
        else if (hour == currentHour) {
            $(timeEl).find("textarea").addClass("present");
        }
        else if (hour < currentHour) {
            $(timeEl).find("textarea").addClass("past");
        };
    };   
};  
checkHour();

//then use setInterval to call checkHour function every few minutes to update
setInterval(function () {
      checkHour();
      console.log("check");
  }, (1000 * 60) * 5);


//   var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//       tasks = [];
//       };
//     }
  
//     // loop over object properties
//     $.each(tasks, function(list, arr) {
//       // then loop over sub-array
//       arr.forEach(function(task) {
//         createTask(task.text, task.date, list);
//       });
//     });
  
//   var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };



