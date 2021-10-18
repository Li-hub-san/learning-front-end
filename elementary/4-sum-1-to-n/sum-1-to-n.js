// Elementary
// 3. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n.
/**
 * Receives a number and returns the sum the numbers from one to n.
 * @param n {number} Number
 * @returns {number} Number.
 */
function sumOf1ToN(n) {
  let sum = 0;
  for (let i = 1; i <= +n; i++) {
    sum = sum + i;
  }
  console.log(sum);
  return sum;
}

function printResult() {
  printFunction("input", "output", sumOf1ToN);
  enableEl("reset");
}
