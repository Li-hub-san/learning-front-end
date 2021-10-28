// Elementary
// 5. Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

function chooseEitherSumOrProductOf1ToN(number, operator) {
  if (
    operator !== "+" &&
    operator !== "*" &&
    operator.toLowerCase() !== "x" &&
    operator !== "×"
  ) {
    throw "Invalid operator";
  }

  if (number === 0 || number === null) {
    throw "Please submit a valid value.";
  }

  let total;

  if (number < 0) {
    total = whenNegativeNumbers(number, operator);
  } else {
    total = whenPositiveNumbers(number, operator);
  }

  let message = " of 1 to " + number + " is: " + total;

  if (operator === "+") {
    return "Sum" + message;
  }

  if (operator === "*" || operator.toLowerCase() === "x" || operator === "×") {
    return "Product" + message;
  }
}

function whenNegativeNumbers(number, operator) {
  let total = 1;

  for (let i = 0; i >= number; i--) {
    total = returnTotal(total, operator, i);
  }

  return total;
}

function whenPositiveNumbers(number, operator) {
  let total = 1;

  for (let i = 2; i <= number; i++) {
    total = returnTotal(total, operator, i);
  }

  return total;
}

function returnTotal(total, operator, i) {
  if (operator === "+") {
    total += i;
  }

  if (operator === "*" || operator.toLowerCase() === "x" || operator === "×") {
    total *= i;
  }

  return total;
}

function printResult() {
  const inputNumberEl = getElement("input-number");
  const inputOperatorEl = getElement("input-operator");
  const outputEl = getElement("output");

  try {
    outputEl.innerText = chooseEitherSumOrProductOf1ToN(
      +inputNumberEl.value,
      inputOperatorEl.value
    );
  } catch (exception) {
    handleException(exception);
  }
  enableEl("reset");
}

function resetGroupButton() {
  disableEl("reset");
  enableEl("submit");

  const outputEl = document.getElementById("output");
  outputEl.innerText = "";
  const inputNumberEl = document.getElementById("input-number");
  inputNumberEl.value = "";
  const inputOperatorEl = document.getElementById("input-operator");
  inputOperatorEl.value = "";
  inputNumberEl.focus();
}
