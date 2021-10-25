// Lists, Strings
// 5.Write a function that returns the elements on odd positions in a list.

function returnElementsOnOddPositions(list) {
  if (list.length < 2) {
    throw "List must contain at least 2 elements";
  }

  let oddNumbersList = [];
  for (let i = 0; i < list.length; i++) {
    if (i % 2 !== 0) {
      oddNumbersList.push(list[i]);
    }
  }
  return oddNumbersList;
}

function printResult() {
  const inputVal = getElement("input").value;
  const outputEl = getElement("output");
  const infoWrapperEl = getElement("info-wrapper");

  const inputList = inputListToStrings(inputVal);

  const formattedOutputLists = buildHighlightedListOutput("", inputList);
  const message = `<span>Elements on odd positions :</span><br>`;

  outputEl.classList.remove("error");

  try {
    validateEmptyList(inputList);
    const output = returnElementsOnOddPositions(inputList);
    const formattedOutput = formatListToOutput(output, ", ");

    outputEl.innerHTML = formattedOutputLists + message + formattedOutput;
  } catch (exception) {
    handleException(exception);
  }

  infoWrapperEl.classList.remove("invisible");
  enableEl("reset");
}

function resetButton() {
  const inputEl = getElement("input");
  const outputEl = getElement("output");
  const infoWrapperEl = getElement("info-wrapper");
  const infoEl = getElement("info");
  const collapsableDivEl = getElement("collapseExample");

  inputEl.value = "";
  outputEl.innerHTML = "";
  infoWrapperEl.classList.add("invisible");
  infoEl.setAttribute("aria-expanded", "false");
  collapsableDivEl.setAttribute("class", "collapse");

  inputEl.focus();
  disableEl("reset");
}
