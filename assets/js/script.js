//Variable storing today's date
var currentDay = moment().format("dddd, MMMM Do YYYY");
//Display todays date in header
$("#currentDay").html(currentDay);

//current hour in 24 hr time format
var currentHour = moment().format("H");
console.log(currentHour);

var tasks = [];

var timeblockNodeList = $(".time-block");

var checkHour = function() {
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

    var loadTasks = function() {}
    //     var timeblockId = $(".time-block").attr("id");
    //     console.log(timeblockId);
    //     tasks = JSON.parse(localStorage.getItem("tasks"));
    //     if (!tasks) {
    //         tasks = [];
    //     }
    //     $.each(tasks, function() {
    //         if (taskObj.savedTime == timeblockId) {
    //             $(".description").append(taskObj.savedTask)
    //         }
    //     })
    // }
        // else if (tasks[taskObj].time) {
        // console.log(tasks);
        // };   

    // var saveTask = function(event) {
    //     var taskEl = $(timeEl).find("textarea").text().trim();
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    // }

for (i = 0; i < timeblockNodeList.length; i++) {
    var hour = i + 9;
    var timeEl = timeblockNodeList[i];
    checkHour();
    loadTasks();
    console.log(hour); 
}

//then use setInterval to call checkHour function every few minutes to update
setInterval(function () {
      checkHour();
      console.log("check");
  }, (1000 * 60) * 3);

  //select all textareas
//var taskNodeList = $("textarea");

$(".time-block").on("click", ".saveBtn", function() {
    var task = $(this).parent().find(".description").val().trim();
    var time = $(this).closest(".time-block").attr("id");
    var taskObj = {
        savedTask: task,
        savedTime: time
    }
    tasks.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(tasks));
});


//       for (i = 0; i < taskNodeList.length; i++) {
//           var taskEl = timeblockNodeList[i]; 
//           console.log(taskEl);
//     localStorage.setItem("task", JSON.stringify(taskEl));
// }
// }

//saveTasks();


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



