//Variable storing today's date
var currentDay = moment().format("dddd, MMMM Do YYYY");
//Display todays date in header
$("#currentDay").html(currentDay);

//current hour in 24 hr time format
//var currentHour = moment().format("H");
var currentHour = "12";
console.log(currentHour);

// var timeblockArray = [];
// document.querySelectorAll(".time-block").(timeblockArray);

var checkHour = function(timeEl) {
    // for (i = 0; i < timeblockArray.length; i++) {
        // var hour = i + 9;
    
         // get date from task element
  var hour = $(timeEl).find("span").text().trim();
  // ensure it worked
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
checkHour();

//then use setInterval to call checkHour function every few minutes to update
setInterval(function () {
    //$(".card .list-group-item").each(function(index, el) {
      checkHour();
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

$(".description").on("click", "p", function() {
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
  });

