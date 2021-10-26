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

function stringToArray(string) {
  return string
    .replace(/\s+/g, ",")
    .split(",")
    .filter((s) => s !== "");
}

function inputListToNumbers(numbersString) {
  let cleanNumbersString = numbersString.replace(/[^\s0-9,-]|-([^0-9]|$)/g, "");
  let cleanList = stringToArray(cleanNumbersString);
  return cleanList.map((s) => +s);
}

function inputListToStrings(string) {
  return stringToArray(string.replace(/[^\s0-9A-Za-z,-]|-([^0-9]|$)/g, ""));
}

function inputListToWords(wordsString) {
  let cleanString = wordsString.replace(/[^\sA-Za-z,]/g, "");
  return stringToArray(cleanString);
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

function buildHighlightedListOutput(listNumber, inputArr) {
  let formattedList = formatListToOutput(inputArr, ", ");
  return `<p class="highlighted">List ${listNumber}: ${formattedList}</p>`;
}

function formatListToOutput(
  array,
  between = "&nbsp;]<br>[&nbsp;",
  prefix = "[&nbsp;",
  suffix = "&nbsp;]"
) {
  return prefix + array.join(between) + suffix;
}

function validateEmptyList(list1 = "list1", list2 = "list2") {
  if (list1.length === 0 || list2.length === 0) {
    throw "Empty list(s) or invalid characters";
  }
}
