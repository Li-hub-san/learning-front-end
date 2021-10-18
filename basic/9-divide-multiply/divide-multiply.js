function calculateOperation(input1, input2, operator) {
  let result;

  if (operator !== "/" && operator !== "*") {
    throw "Invalid operator";
  }

  switch (operator) {
    case "/":
      result = divide(input1, input2);
      break;

    case "*":
      result = multiply(input1, input2);
      break;
  }
  return result;
}

function multiply(input1, input2) {
  return input1 * input2;
}

function divide(input1, input2) {
  if (input2 === 0) {
    throw "You CANNOT divide by 0";
  }
  return input1 / input2;
}

function getPrettyOperator(operator) {
  switch (operator) {
    case "/":
      operator = "÷";
      break;
    case "*":
      operator = "×";
      break;
  }
  return operator;
}

function executeOperation() {
  const input1 = +getElement("input1").value;
  const input2 = +getElement("input2").value;
  const operator = getElement("operator").value;

  const outputEl = getElement("output");
  outputEl.classList.remove("error");

  try {
    const prettyOperator = getPrettyOperator(operator);
    const operationResult = calculateOperation(input1, input2, operator);
    outputEl.innerHTML = `<p>${input1} ${prettyOperator} ${input2} = ${operationResult}</p>`;
  } catch (exception) {
    handleException(exception);
  }

  enableEl("reset");
}
