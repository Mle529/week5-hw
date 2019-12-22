var time = document.getElementById('currentDay');
time.textContent = moment().format("MMMM Do YYYY");

var currentTime = moment().format("HH");

for (var i = 0; i < 9; i++) {

    var timeHour = i + 9;
    var formatTime;
    var currentHour;

    if (timeHour === 12) {
        formatTime = timeHour + "PM";
    }
    else if (timeHour > 12) {
        formatTime = timeHour - 12 + "PM";
    }
    else {
        formatTime = timeHour + "AM";
    }

    if (timeHour < currentTime) {
        currentHour = past
    }

    var newRow = $("<div class = 'row'>");
    var col1 = $("<div class = 'hour col-sm-2'>");
    var col2 = $("<div class = 'timeblock col-sm-8'>");
    var col3 = $("<div class = 'col-sm-2'>");

    col1.text(formatTime);

    var saveButton = $("<button class = 'saveBtn icon w-100 h-100'>")
    col3.append(saveButton);

    var icon = $('<i class="far fa-save fa-2x"></i>');
    saveButton.append(icon);


    newRow.append(col1, col2, col3);
    $(".container").append(newRow);

}
