
// OUTLINE

//Define variables to use for time with moment.js
var jumboDate = moment().format("dddd MMMM Do, YYYY");

// On page load, the current day should display at the jumbotron inside the <p> element.
$("#currentDay").text(jumboDate);

//Set the time in the left-hand span elements with moment.js so it can be evaluated
$(".row").each(function(index) {
    $(this).children("span").text();

    var time = moment().set("hour", 9 + index);
    console.log(time.hour());

    //Set the content of each div's span element to the "h:00" format of current time
    var blockTime = moment().hour(9 + index).format("h:00");
    $(this).children("span").text(blockTime);

    //Define selector to style
    var hourBlock = $(this).children("div");
    console.log(hourBlock);

    if (moment().isAfter(time)) {
        console.log("This block is before the current time");
        //Remove any previous color styles and add the grayed-out style
        hourBlock.removeClass("bg-light bg-primary");
        hourBlock.addClass("bg-secondary");

    }
    else if (moment().isBefore(time)) {
        console.log("This time block has not occurred yet.");
        //Remove any previous color styles
        hourBlock.removeClass("bg-primary bg-secondary");
        hourBlock.addClass("bg-light");
    }
    else {
        console.log("This is the current hour");
        //Apply a light blue highlight or border
        hourBlock.removeClass("bg-light bg-secondary");
        hourBlock.addClass("bg-primary");
    }
});


//Define the storage array that will hold the elements' data
tasks = []

//On clicking the div, it should change to a textarea and allow the user to type content.
var editContent = function() {
    var text = $(this).text().trim();

    var textInput = $("<textarea>")
        .addClass("form-control col-10")
        .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
}
//Listener for the onclick event within hourly task
$(".container").on("click", ".hourly-task", editContent);

//function that updates content and saves to the local array
var updateContent = function() {
    var content = $(this).parent("div").children("textarea").val();
    var position = $(this).parent("div").children("span").text();
    
    //Append the values to the local array and save
    /*This currently pushes and doesn't check if there is already an entry
    for that particular hour; this needs to be fixed somehow. */
    tasks.push({position: position, content: content});
    console.log(tasks);

    //When the user clicks the button on the right, the data should be appended to localStorage.

    //Change back to a <div> element from <textarea>
    var originalDiv = $("<div>").text(content)
        .addClass("col-10 hourly-task text-center border border-secondary rounded-sm mb-1 p-3 bg-light");
    $(this).parent("div").children("textarea").replaceWith(originalDiv);
}

//Listener for the saving of edited content
$(".btn-primary").on("click", updateContent);
