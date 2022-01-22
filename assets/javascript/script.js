
// OUTLINE

//Define variables to use for time with moment.js
var jumboDate = moment().format("dddd MMMM Do, YYYY");

// On page load, the current day should display at the jumbotron inside the <p> element.
$("#currentDay").text(jumboDate);

//Set the time in the left-hand span elements with moment.js so it can be evaluated

    /*The below function currently doesn't get called when the updateContent() function runs,
    so I will need to wrap it in its own function name and call it probably within the
    originalDiv declaration around line 80*/
var formatHours = function() {

    $(".row").each(function(index) {
        $(this).children("span").text();

        var time = moment().set("hour", 9 + index);

        //Set the content of each div's span element to the "h:00" format of current time
        var blockTime = moment().hour(9 + index).format("h:00");
        $(this).children("span").text(blockTime);

        //Define selector to style
        var hourBlock = $(this).children("div");

        if (moment().isAfter(time)) {
            //Remove any previous color styles and add the grayed-out style
            hourBlock.removeClass("bg-light bg-info");
            hourBlock.addClass("bg-secondary");

        }
        else if (moment().isBefore(time)) {
            //Remove any previous color styles
            hourBlock.removeClass("bg-info bg-secondary");
            hourBlock.addClass("bg-light");
        }
        else {
            //Apply a light blue highlight or border
            hourBlock.removeClass("bg-light bg-secondary");
            hourBlock.addClass("bg-info");
        }
    });
}
var tasks;

//On clicking the div, it should change to a textarea and allow the user to type content.
var editContent = function() {
    var text = $(this).text().trim();

    var textInput = $("<textarea>")
        .addClass("form-control col-6 col-sm-8 col-lg-9")
        .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");

    //Possibly add a function call on change, rather than just on clicking "update"

}

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    //If there is nothing in localStorage, a new array needs to be made
    if (!tasks) {
        tasks = {
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour1: "",
            hour2: "",
            hour3: "",
            hour4: "",
            hour5: ""
        };
    };
};

//Listener for the onclick event within hourly task
$(".container").on("click", ".hourly-task", editContent);

//function that updates content and saves to the local array
var updateContent = function() {
    var content = $(this).parent("div").children("textarea").val();
    var position = $(this).parent("div").children("span").text();

    loadTasks();

    //Determine which hour to set the value to content within
    switch(position) {
        case "9:00":
            tasks.hour9 = content;
            break;
        case "10:00":;
            tasks.hour10 = content;
            break;
        case "11:00":;
            tasks.hour11 = content;
            break;
        case "12:00":;
            tasks.hour12 = content;
            break;
        case "1:00":
            tasks.hour1 = content;
            break;
        case "2:00":
            tasks.hour2 = content;
            break;
        case "3:00":
            tasks.hour3 = content;
            break;
        case "4:00":
            tasks.hour4 = content;
            break;
        case "5:00":
            tasks.hour5 = content;
            break;
        default:
            break;
    }
    
    //When the user clicks the button on the right, the data should be appended to localStorage.
    saveTasks();

    //Change back to a <div> element from <textarea>
    var originalDiv = $("<div>").text(content)
        .addClass("col-10 hourly-task text-center border border-secondary rounded-sm mb-1 p-3 bg-light");
    $(this).parent("div").children("textarea").replaceWith(originalDiv);
    
    //re-format the colors and styles of each div
    formatHours();
}

//Listener for the saving of edited content
$(".btn-primary").on("click", updateContent);

//Format the page on load
formatHours();