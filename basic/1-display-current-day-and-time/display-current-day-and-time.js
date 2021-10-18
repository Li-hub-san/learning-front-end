// Javascript basic
// 1. Write a JavaScript program to display the current day and time in the following format:
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
/**
 *
 * @returns {*[]}
 */
function displayCurrentDayAndTime() {
  const date = new Date();

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = date.getDay();
  const currentWeekDay = weekDays[currentDay];

  const output = [];
  output.push("Today is: " + currentWeekDay);

  let hours = date.getHours();

  const formattedHours = hours % 12 || 12;
  const formattedAMPM = hours >= 12 ? " PM" : " AM";
  const formattedMinutes = " : " + date.getMinutes();
  const formattedSeconds = " : " + date.getSeconds();

  const time =
    formattedHours + formattedAMPM + formattedMinutes + formattedSeconds;

  output.push("Current time is : " + time);
  console.log(output);
  return output;
}

function printResult() {
  const outputEl = getElement("output");

  outputEl.innerHTML = displayCurrentDayAndTime().join("<br>");
  enableEl("reset");
}
