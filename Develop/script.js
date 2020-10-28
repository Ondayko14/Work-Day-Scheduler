
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

//Object to save the inputs into local storage.
var tasksData = {};

//what happens when saved button is clicked.
//9am save
//Dynamically update backgrounds of the textAreas using the hour
//9am
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
};
//10am
var changeBackground10am = function() {
    //update every 1 seconed mins
    setInterval(function() {
    //if the hour has passed, turn textarea background gray
    if(moment().local().hour() > 10) {
    $("#10amText")
    .addClass("past");
    }
    //else if the hour is currently happening, turn the textarea background red
    else if (moment().local().hour() === 10) {
        $("#10amText")
        .addClass("present");
    }
    //else, turn the textare background green
    else {
        $("#10amText")
        .addClass("future");
    }
}, 1000);
};
//11am
var changeBackground11am = function() {
    //update every 1 seconed mins
    setInterval(function() {
    //if the hour has passed, turn textarea background gray
    if(moment().local().hour() > 11) {
    $("#11amText")
    .addClass("past");
    }
    //else if the hour is currently happening, turn the textarea background red
    else if (moment().local().hour() === 11) {
        $("#11amText")
        .addClass("present");
    }
    //else, turn the textare background green
    else {
        $("#11amText")
        .addClass("future");
    }
}, 1000);
};
//12pm
var changeBackground12pm = function() {
    //update every 1 seconed mins
    setInterval(function() {
    //if the hour has passed, turn textarea background gray
    if(moment().local().hour() > 12) {
    $("#12pmText")
    .addClass("past");
    }
    //else if the hour is currently happening, turn the textarea background red
    else if (moment().local().hour() === 12) {
        $("#12pmText")
        .addClass("present");
    }
    //else, turn the textare background green
    else {
        $("#12pmText")
        .addClass("future");
    }
}, 1000);
};
//1pm
var changeBackground1pm = function() {
    //update every 1 seconed mins
    setInterval(function() {
    //if the hour has passed, turn textarea background gray
    if(moment().local().hour() > 13) {
    $("#1pmText")
    .addClass("past");
    }
    //else if the hour is currently happening, turn the textarea background red
    else if (moment().local().hour() === 13) {
        $("#1pmText")
        .addClass("present");
    }
    //else, turn the textare background green
    else {
        $("#1pmText")
        .addClass("future");
    }
}, 1000);
};
//2pm
var changeBackground2pm = function() {
    //update every 1 seconed mins
    setInterval(function() {
    //if the hour has passed, turn textarea background gray
    if(moment().local().hour() > 14) {
    $("#2pmText")
    .addClass("past");
    }
    //else if the hour is currently happening, turn the textarea background red
    else if (moment().local().hour() === 14) {
        $("#2pmText")
        .addClass("present");
    }
    //else, turn the textare background green
    else {
        $("#2pmText")
        .addClass("future");
    }
}, 1000);
};
//3pm
var changeBackground3pm = function() {
    //update every 1 seconed mins
    setInterval(function() {
    //if the hour has passed, turn textarea background gray
    if(moment().local().hour() > 15) {
    $("#3pmText")
    .addClass("past");
    }
    //else if the hour is currently happening, turn the textarea background red
    else if (moment().local().hour() === 15) {
        $("#3pmText")
        .addClass("present");
    }
    //else, turn the textare background green
    else {
        $("#3pmText")
        .addClass("future");
    }
}, 1000);
};
//4pm
var changeBackground4pm = function() {
    //update every 1 seconed mins
    setInterval(function() {
    //if the hour has passed, turn textarea background gray
    if(moment().local().hour() > 16) {
    $("#4pmText")
    .addClass("past");
    }
    //else if the hour is currently happening, turn the textarea background red
    else if (moment().local().hour() === 16) {
        $("#4pmText")
        .addClass("present");
    }
    //else, turn the textare background green
    else {
        $("#4pmText")
        .addClass("future");
    }
}, 1000);
};
//5pm
var changeBackground5pm = function() {
    //update every 1 seconed mins
    setInterval(function() {
    //if the hour has passed, turn textarea background gray
    if(moment().local().hour() > 17) {
    $("#5pmText")
    .addClass("past");
    }
    //else if the hour is currently happening, turn the textarea background red
    else if (moment().local().hour() === 17) {
        $("#5pmText")
        .addClass("present");
    }
    //else, turn the textare background green
    else {
        $("#5pmText")
        .addClass("future");
    }
}, 1000);
};

//function calls
changeBackground9am();
changeBackground10am();
changeBackground11am();
changeBackground12pm();
changeBackground1pm();
changeBackground2pm();
changeBackground3pm();
changeBackground4pm();
changeBackground5pm();
currentDay();

//listeners
$("#saver").on("click", function() {
    //get the time slot
    var timeSlot = $(".timeCheck")
    .attr("id");
    console.log(timeSlot);

    //get the text content
    var text = $("textarea")
    .val()
    .trim();
    console.log(text);

    //get the index
    var index = $(this)
    .closest(".timeCheck")
    .index();

    console.log(timeSlot +" " + text + " " + index);
});