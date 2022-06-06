//Variable storing today's date
var currentDay = moment().format("dddd, MMMM Do YYYY");
//Display todays date in header
$("#currentDay").html(currentDay);

//current hour in 24 hr time format
var currentHour = moment().format("H");
console.log(currentHour);

//var tasks = [];
var time;
var task;

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

    var loadTasks = function() {

        var task9 = (localStorage.getItem(9));
        var task10 = (localStorage.getItem(10));
        var task11 = (localStorage.getItem(11));
        var task12 = (localStorage.getItem(12));
        var task13 = (localStorage.getItem(13));
        var task14 = (localStorage.getItem(14));
        var task15 = (localStorage.getItem(15));
        var task16 = (localStorage.getItem(16));
        var task17 = (localStorage.getItem(17));
    
        $("#nine").val(task9)
        $("#ten").val(task10)
        $("#eleven").val(task11)
        $("#twelve").val(task12)
        $("#thirteen").val(task13)
        $("#fourteen").val(task14)
        $("#fifteen").val(task15)
        $("#sixteen").val(task16)
        $("#seventeen").val(task17)
    
        }

        loadTasks();

for (i = 0; i < timeblockNodeList.length; i++) {
    var hour = i + 9;
    var timeEl = timeblockNodeList[i];
    checkHour();
    console.log(hour); 
}

//then use setInterval to call checkHour function every few minutes to update
setInterval(function () {
      checkHour();
      console.log("check");
  }, (1000 * 60) * 3);

$(".time-block").on("click", ".saveBtn", function() {
    var task = $(this).parent().find(".description").val().trim();
    var time = $(this).closest(".time-block").attr("id");
    localStorage.setItem(time, task);
});

