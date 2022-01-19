
// OUTLINE

//Define variables to use for time with moment.js
var jumboDate = moment().format("dddd MMMM Do, YYYY");

var currentTime = moment().hour();
console.log(currentTime);
var dayBegin = 9;
var dayEnd = 18;

// On page load, the current day should display at the jumbotron inside the <p> element.
$("#currentDay").text(jumboDate);

//Set the time in the left-hand span elements with moment.js so it can be evaluated

// Apply styles to each div based on the current time evaluation
$(".container");
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
    tasks.push({position: position, content: content});
    console.log(tasks);

    //Change back to a <div> element from <textarea>
    var originalDiv = $("<div>").text(content)
        .addClass("col-10 hourly-task text-center border border-secondary rounded-sm mb-1 p-3 bg-light");
    $(this).parent("div").children("textarea").replaceWith(originalDiv);
}

//Listener for the saving of edited content
$(".btn-primary").on("click", updateContent);

//When the focus changes, it should revert to a div, but keep the text content.

//When the user clicks the button on the right, the data should be appended to localStorage.
