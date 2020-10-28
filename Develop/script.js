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

//create the hours

//function calls
currentDay();