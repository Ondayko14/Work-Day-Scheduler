
//Display the current day
var currentDay = function() {
    //date
    var date = moment().local().format("ddd, h: mA").toString();
    //display date
    $("#currentDay")
    .text("Today Is " + date);
    
    //update date
    setInterval(function() {
    var dateUpdated = moment().local().format("ddd, h: mA").toString();
    $("#currentDay")
    .text("Today Is " + dateUpdated);
    }, 30000);
}

//Dynamically update background of the textArea using the date
var changeBackground = function() {
    //if the hour has passed, turn textarea background gray
    //else if the hour is currently happening, turn the textarea background red
    //else, turn the textare background green
}
//function calls
currentDay();