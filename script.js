//Setting date into Nav
console.log("Current Date", moment().format("MMMM Do YYYY"));
console.log("Current Hour", moment().format("H"));
var currentDate = moment().format("MMMM Do YYYY");
var navDate = $("#currentDate");
navDate.text(currentDate);

//Dynamically create planner div

for (let time = 9; time <= 17; time++) {
    
    //Div for the row
    var plannerDiv = $("<div>");
    plannerDiv.addClass("row container");
    $("#planner").append(plannerDiv);

    //am or pm display
    var hour12 = 0;
    var ampm = "";
    if (time > 12){
        hour12 = time - 12;
        am_pm = " pm";
    } else {
        hour12 = time;
        am_pm = " am";
    }
    
    //Div for the time w/ business hours starting at 9am and ending at 5pm
    var timeDiv = $("<div>");
    timeDiv.addClass("col-lg-2 time");
    timeDiv.attr("hour-data", time)
    timeDiv.text(hour12+am_pm);
    plannerDiv.append(timeDiv);

    //Creating input for each row
    var input = $("<input>");
    input.addClass("col-lg-8 content");
    plannerDiv.append(input);

    //Creating save button for each row
    var save = $("<div>");
    save.addClass("col-lg-1 save");
    plannerDiv.append(save);
    save.text("Save");
    
    //Changing color of each row to determine past/present/future  *** how is 9 greater than 17????
    if (timeDiv.attr("hour-data") === moment().format("H")){
        input.css("background-color","green");
    } else if (timeDiv.attr("hour-data") < moment().format("H")) {
        input.css("background-color", "orange");
    }
}