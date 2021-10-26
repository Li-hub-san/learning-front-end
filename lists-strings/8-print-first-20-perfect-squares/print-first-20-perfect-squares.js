// Lists, Strings
// 9.Write a function on_all that applies a function to every element of a list.
// Use it to print the first twenty perfect squares of that list.
// The perfect squares can be found by multiplying each natural number with itself.
// The first few perfect squares are 1*1=1 2*2=4 3*3=9
// Twelve for example is not a perfect square because there is no natural number m so that m*m=12
// (This question is tricky if your programming language makes it difficult to pass functions as arguments.)

function getFirst20PerfectSquares() {
  const perfectSquares = [];

  for (let i = 1; perfectSquares.length < 20; i++) {
    let currentValueSquareRoot = Math.sqrt(i);

    if (isNaturalNumber(currentValueSquareRoot)) {
      perfectSquares.push(i);
    }
  }

  return perfectSquares;
}

function isNaturalNumber(number) {
  return Math.floor(number) === +number;
}

function printFirst20PerfectSquares() {
  const outPutEl = getElement("output");
  outPutEl.innerHTML = formatOutput(getFirst20PerfectSquares());
  enableEl("reset");
  disableEl("submit");
}

function formatOutput(output) {
  const message = `<p class="highlighted">20 first perfect squares are:</p>`;
  output = formatListToOutput(output, ", ");
  return message + output;
}
