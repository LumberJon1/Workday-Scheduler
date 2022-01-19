
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

//On clicking the div, it should change to a textarea and allow the user to type content.

//When the focus changes, it should revert to a div, but keep the text content.

//When the user clicks the button on the right, the data should be appended to localStorage.
