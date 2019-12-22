var time = document.getElementById('currentDay');
time.textContent = moment().format("MMMM Do YYYY");

var currentTime = moment().format("HH");

var userDataStorage = localStorage.getItem("userPlanner");
if (userDataStorage != null) {

}



//For loop to generate 9 different timeblocks
for (var i = 0; i < 9; i++) {

    var timeHour = i + 9;
    var formatTime;
    var currentHour;

    // Formatting the hour and adding "AM or PM"
    if (timeHour === 12) {
        formatTime = timeHour + "PM";
    }
    else if (timeHour > 12) {
        formatTime = timeHour - 12 + "PM";
    }
    else {
        formatTime = timeHour + "AM";
    }

    // Determine if the timeblocks display past, present or future
    if (timeHour < currentTime) {
        currentHour = "past";
    }
    else if (timeHour === currentTime) {
        currentHour = "present";
    }
    else {
        currentHour = "future";
    }


    // Creating new rows that contain columns for the hour, timeblock and save button
    var newRow = $("<div class = 'row'>");
    var col1 = $("<div class = 'hour col-sm-2'>");
    var col2 = $("<div class = 'timeblock col-sm-8'>");
    var col3 = $("<div class = 'col-sm-2'>");

    col1.text(formatTime);

    var userInput = $("<textarea class = 'w-100 h-100'>")
    col2.append(userInput);
    userInput.attr("class", currentHour);

    var saveButton = $("<button class = 'saveBtn icon w-100 h-100'>")
    col3.append(saveButton);

    var icon = $('<i class="far fa-save fa-2x"></i>');
    saveButton.append(icon);

    // appends the new rows to the page
    newRow.append(col1, col2, col3);
    $(".container").append(newRow);

}

$(".saveBtn").on("click", function () {
    localStorage.setItem("userInput", JSON.stringify(userPlanner));
});