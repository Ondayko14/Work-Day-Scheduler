
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




//Dynamically update backgrounds of the textArea using the date
var changeBackground9am = function() {
    //update every 1 seconed mins
    setInterval(function() {
    //if the hour has passed, turn textarea background gray
    if(moment().local().hour() > 9) {
    $("#9amText")
    .addClass("past");
    }
    //else if the hour is currently happening, turn the textarea background red
    else if (moment().local().hour() === 9) {
        $("#9amText")
        .addClass("present");
    }
    //else, turn the textare background green
    else {
        $("#9amText")
        .addClass("future");
    }
}, 1000);
}
//function calls
changeBackground9am();
currentDay();