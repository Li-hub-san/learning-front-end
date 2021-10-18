// Lists, Numbers
// 1. Write a function that returns the largest number in a list.
function printResult() {
  let listVal = getElement("input").value;
  const outputEl = getElement("output");
  const array = filterInputNumbersToArray(listVal);

  outputEl.classList.remove("error");
  try {
    outputEl.innerHTML =
      `<p class="highlighted">Your list:<br>[&nbsp${array.join(
        ", "
      )}&nbsp]</p>` +
      `<p>Largest number in the list: [&nbsp${getLargestNumber(
        array
      )}&nbsp]</p>`;
  } catch (exception) {
    handleException(exception);
  }
  enableEl("reset");
}

function filterInputNumbersToArray(numberList) {
  return numberList
    .replace(/[^0-9\s-]+/g, "")
    .split(" ")
    .filter((n) => n !== "" && !isNaN(n))
    .map((el) => +el);
}

/**
 * Receives a list of numbers and returns the largest number of the list.
 * @param {number[]} list numbers
 * @returns {number} the largest number
 */
function getLargestNumber(list) {
  if (list.length === 0) {
    throw "Empty list";
  }

  let largestNumber = list[0];
  for (let i = 1; i < list.length; i++) {
    const currentNumber = list[i];

    if (currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
  }
  return largestNumber;
}
