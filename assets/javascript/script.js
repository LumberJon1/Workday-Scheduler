
// OUTLINE

//Define variables to use for time with moment.js
var jumboDate = moment().format("dddd MMMM Do, YYYY");

var currentTime = moment().hour();
var dayBegin = 9;
var dayEnd = 18;

// On page load, the current day should display at the jumbotron inside the <p> element.
$("#currentDay").text(jumboDate);

//Set the time in the left-hand span elements with moment.js so it can be evaluated
$(".row").each(function(index) {
    $(this).children("span").text();

    var blockTime = moment().hour("9").add(index,"hour").format("h");
    $(this).children("span").text(blockTime);

    console.log("Current time:", currentTime);

    
});

// Apply styles to each div based on the current time evaluation
//IF the time is after an element, that element should be grayed out

//If the time is before an element, those future elements should be white

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
