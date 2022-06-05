//Variable storing today's date
var currentDay = moment().format("dddd, MMMM Do YYYY");
//Display todays date in header
$("#currentDay").html(currentDay);

var currentTime = moment().format("LTS");
console.log(currentTime);

