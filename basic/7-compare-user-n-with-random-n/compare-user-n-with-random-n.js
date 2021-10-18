// 7. Write a JavaScript program where the program takes a random
// integer between 1 to 10,
// the user is then prompted to input a guess number.
// If the user input matches with guess number, the program will display a message "Good Work"
// otherwise display a message "Not matched".

// connection solution to DOM
function executeRandom() {
  const inputNumberEl = document.getElementById("input");
  const resultEl = document.getElementById("output");

  const numberMatchRandom = doesNumberMatchRandom(+inputNumberEl.value);
  const result = printMatchedResult(numberMatchRandom);

  if (numberMatchRandom) {
    resultEl.classList.add("win");
    resultEl.innerHTML = result;
  } else {
    resultEl.classList.remove("win");
    resultEl.innerHTML = `<span><i class="bi-exclamation-circle-fill"></i> ${result}</span>`;
  }
  enableEl("reset");
}

/**
 * Receives a number, compares it with a generated random and returns true when they match.
 * @param n number
 * @returns {boolean} true if n matches randomly generated number.
 */
function doesNumberMatchRandom(n) {
  const randomN = generateRandomNumber(1, 15);
  return n === randomN;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Receives a boolean and replaces true/false statements with a string.
 * @param matched is true
 * @returns {string} String: 'Good Work' when true, 'Not matched' when false.
 */
function printMatchedResult(matched) {
  if (matched) {
    return "Good Work!";
  }
  return "Not matched.";
}
