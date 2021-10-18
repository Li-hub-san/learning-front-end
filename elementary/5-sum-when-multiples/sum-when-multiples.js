// Elementary
// 5. Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

/**
 * Receives a number and returns the sum between one and n, considering only multiples of three and five.
 * @param n {number} Number
 * @returns {number} Number
 */
function sumOnlyMultiplesOfThreeAndFive(n) {
  let sum = 0;
  for (let i = 1; i <= +n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

function printResult() {
  const inputVal = +getElement("input").value;
  const outputEl = getElement("output");

  outputEl.innerHTML = sumOnlyMultiplesOfThreeAndFive(inputVal).toString();
  enableEl("reset");
}
