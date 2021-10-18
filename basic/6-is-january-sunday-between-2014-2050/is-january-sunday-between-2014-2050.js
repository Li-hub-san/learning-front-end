// 6. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

function printResult() {
  const fromYear = +getElement("input1").value;
  const toYear = +getElement("input2").value;
  const outputEl = getElement("output");
  outputEl.classList.remove("error");

  try {
    const output = getYearsWithConditionOnJanuary1st(fromYear, +toYear);
    console.log(output.length);
    const length = output.length;
    let matchText = "matches the";
    let yearsText = "years:";

    if (length === 1) {
      yearsText = "year:";
    }

    if (length === 0) {
      matchText = "has no matches";
      yearsText = "";
    }

    const initialAnswer = `<span>January<sup>1st</sup> being a Sunday ${matchText} ${yearsText}</span><br><br>`;

    if (length > 0) {
      outputEl.innerHTML =
        `${initialAnswer}` + `<p>[ ${output.join(", ")} ]</p>`;
    } else {
      outputEl.innerHTML = `<span class="no-match"><i class="bi-exclamation-circle-fill"></i> ${initialAnswer}</span>`;
    }
  } catch (exception) {
    handleException(exception);
  }

  enableEl("reset");
}

/**
 * Receives two full years and returns an array with the years that January 1st is a Sunday;
 * @param fromYear < to year
 * @param toYear > from year
 * @returns {*[][]}
 */
function getYearsWithConditionOnJanuary1st(fromYear, toYear) {
  if (fromYear > toYear) {
    throw "From year > To year";
  }

  const outputList = [];

  for (let i = fromYear; i <= toYear; i++) {
    if (isJanuary1StSunday(i)) {
      outputList.push(i);
    }
  }
  return outputList;
}

/**
 * Verifies if January the 1st is a Sunday.
 * @param year Year
 * @returns {boolean} is a Sunday.
 */
function isJanuary1StSunday(year) {
  const date = new Date(year + "-01-01");
  return date.getDay() === 0;
}
