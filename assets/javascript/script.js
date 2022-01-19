
// OUTLINE

//Define variables to use for time with moment.js
var jumboDate = moment().format("dddd MMMM Do, YYYY");

var currentTime = moment().hour();
console.log(currentTime);
var dayBegin = 9;
var dayEnd = 18;

// On page load, the current day should display at the jumbotron inside the <p> element.
$("#currentDay").text(jumboDate);

// Define container on which to load the hourly elements

//Define the storage array that will hold the elements' data and state

//Define each element by hour from 9AM until 5PM

//Each element needs a span on the left with the time, a div in the middle to hold
//the text content and color, and a button on the right to save.

//On clicking the div, it should change to a textarea and allow the user to type content.

//When the focus changes, it should revert to a div, but keep the text content.

//When the user clicks the button on the right, the data should be appended to localStorage.

//Check against local time to see whether styles should be applied

//IF the time is after an element, that element should be grayed out

//If the time is before an element, those future elements should be white
