// 5. Write a JavaScript program to determine whether a given year is a leap year
// in the Gregorian calendar.
//solution

/**
 * Verifies if the year is a leap year in the Gregorian calender.
 * @param year Year
 * @returns {boolean} is leap year.
 */
function checkIfLeapYear(year) {
  if (year < 1582) {
    throw "Year < 1582";
  }

  if (year % 400 === 0) {
    return true;
  }

  return year % 4 === 0 && year % 100 !== 0;
}

function printResult() {
  const year = +getElement("input").value;

  const outputEl = getElement("output");
  outputEl.classList.remove("error");

  try {
    const isLeapYear = checkIfLeapYear(year);
    const output = isLeapYear
      ? year + " - Leap year"
      : year + " - Not a leap year";
    outputEl.innerHTML = output.toString();
  } catch (exception) {
    handleException(exception);
  }

  enableEl("reset");
}
