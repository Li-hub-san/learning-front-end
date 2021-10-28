// Elementary
// 3. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n.

let iCount = [];
let runningTotal = [];

/**
 * Receives a number and returns the sum the numbers from one to n.
 * @param n {number} Number
 * @returns {number} Number.
 */
function sumOf1ToN(n) {
  let sum = 0;

  for (let i = 1; i <= +n; i++) {
    sum = sum + i;
    iCount.push(i);
    runningTotal.push(sum);
    console.log("i", i);
    console.log("sum", sum);
  }
  return sum;
}

function printResult() {
  const inputVal = +getElement("input").value;
  const outputEl = getElement("output");

  const result = sumOf1ToN(inputVal).toString();

  outputEl.innerHTML = `<p>Total sum of 1 to ${inputVal} = ${result}</p>`;

  enableEl("reset");
}

function reduceArray(array, n) {
  const first3 = [];
  const last3 = [];
  if (n > 20) {
    first3.push(array.splice(0, 3));
    last3.push(array.slice(array.length - 3, array.length));

    return first3.concat(last3);
  }
  return array;
}
