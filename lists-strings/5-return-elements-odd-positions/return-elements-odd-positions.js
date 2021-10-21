// Lists, Strings
// 5.Write a function that returns the elements on odd positions in a list.

function returnElementsOnOddPositions(list) {
  if (list.length === 0) {
    throw "Empty list";
  }
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

  const outputListEl = getElement("user-list");
  const inputList = inputListToStrings(inputVal);

  outputEl.classList.remove("error");
  try {
    outputListEl.innerHTML = `
      <span>Your list :<br> [&nbsp;${inputList.join(", ")}&nbsp;]`;
    outputEl.innerHTML =
      `<span>Elements on odd positions :</span>` +
      `<p>[&nbsp;${returnElementsOnOddPositions(inputList).join(
        ", "
      )}&nbsp;]</p>`;
  } catch (exception) {
    handleException(exception);
  }

  infoWrapperEl.classList.remove("invisible");
  enableEl("reset");
}

function resetButton() {
  const inputEl = getElement("input");
  const outputEl = getElement("output");
  const outputListEl = getElement("user-list");
  const infoWrapperEl = getElement("info-wrapper");
  const infoEl = getElement("info");
  const collapsableDivEl = getElement("collapseExample");

  inputEl.value = "";
  outputEl.innerHTML = "";
  infoWrapperEl.classList.add("invisible");
  outputListEl.innerHTML = "";
  infoEl.setAttribute("aria-expanded", "false");
  collapsableDivEl.setAttribute("class", "collapse");
  inputEl.focus();
  disableEl("reset");
}
