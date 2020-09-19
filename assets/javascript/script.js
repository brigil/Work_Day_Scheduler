// Displays current time
function getHeaderDate() {
    var dateDisplay = moment().format('dddd, MMMM Do');
    $("#currentDay").text(dateDisplay);
}

//Variables for hours 
var CurrentDay = [
    {
        id: "0",
        hour: "09:00",
        time: "09",
         meridiem: " am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10:00",
        time: "10",
        meridiem: " am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11:00",
        time: "11",
        meridiem: " am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12:00",
        time: "12",
        meridiem: " pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "1:00",
        time: "13",
        meridiem: " pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "2:00",
        time: "14",
        meridiem: " pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "3:00",
        time: "15",
        meridiem: " pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "4:00",
        time: "16",
        meridiem: " pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "5:00",
        time: "17",
        meridiem: " pm",
        reminder: ""
    },
    
]



// saves to localStorage
function saveReminders() {
    localStorage.setItem("CurrentDay", JSON.stringify(CurrentDay));
}
function init() {
    var dayStored = JSON.parse(localStorage.getItem("CurrentDay"));

    if (dayStored) {
        CurrentDay = dayStored;
    }

    
}

function displayReminders() {
    CurrentDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })

    saveReminders();
    displayReminders();
}





getHeaderDate();
// create rows and append

CurrentDay.forEach(function(thisHour) {
   //creats the rows in container
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);
//displays the time on each row, hour and mridiem together
    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

     // displays the text in text area
    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    
    if (thisHour.time < moment().format("HH")) {
        planData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }

    // creates save buttons on the rows
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})





// calling init function

init();