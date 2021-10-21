// to avoid constant repeating on getting elements from DOM

function getElement(elId) {
  return document.getElementById(elId);
}

// Enable and disable buttons
function disableEl(elementId) {
  const element = getElement(elementId);
  element.setAttribute("disabled", "disabled");
}

function enableEl(elementId) {
  const element = getElement(elementId);
  element.removeAttribute("disabled");
}

function printFunction(inputElId, outputElId, callback) {
  const inputEl = getElement(inputElId);
  const outputEl = getElement(outputElId);

  if (!!inputEl && !!outputEl) {
    outputEl.innerHTML = callback && callback(inputEl.value);
  }
}

function inputValueToArray(inputVal) {
  return inputVal.replaceAll(", ", ",").split(/[, ]/);
}

function stringToArray(string) {
  return string
    .replace(/\s+/g, ",")
    .split(",")
    .filter((s) => s !== "");
}

function inputListToNumbers(numbersString) {
  return stringToArray(numbersString.replace(/[^\s0-9,]/g, "")).map((s) => +s);
}

function inputListToStrings(string) {
  return stringToArray(string.replace(/[^\s0-9A-Za-z,]/g, ""));
}

function inputListToWords(wordsString) {
  return stringToArray(wordsString.replace(/[^\sA-Za-z,]/g, ""));
}

function resetButton(
  inputIds = ["input"],
  outputId = "output",
  submitId = "submit",
  resetId = "reset"
) {
  disableEl(resetId);
  enableEl(submitId);

  const outputEl = getElement(outputId);
  outputEl.innerHTML = "";

  while (inputIds.length > 0) {
    const inputId = inputIds.pop();
    const inputEl = getElement(inputId);
    if (!!inputEl) {
      inputEl.value = "";
      inputEl.focus();
    }
  }

  const infoWrapperEl = getElement("info-wrapper");
  if (!!infoWrapperEl) {
    infoWrapperEl.classList.add("invisible");
  }
}

function resetLists(listIds = ["list1", "list2"], outputId = "output") {
  resetButton(listIds, outputId);
}

function handleException(exception, outputId = "output", errorClass = "error") {
  console.error(exception);
  const outputEl = getElement(outputId);
  outputEl.innerHTML = `<i class="bi bi-exclamation-triangle-fill"></i> <span>${exception}</span>`;
  outputEl.classList.add(errorClass);
}

let array = [1, 2, 3];
console.log(
  array
    .toString()
    .replace(/,/g, "0")
    .replace(/[^\sA-Za-z]/g, "")
);
