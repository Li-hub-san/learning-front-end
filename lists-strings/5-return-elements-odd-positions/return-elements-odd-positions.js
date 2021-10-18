// Lists, Strings
// 5.Write a function that returns the elements on odd positions in a list.

function returnElementsOnOddPositions(list) {
  if (list.length === 0) {
    throw "Empty list";
  }
  if (list.length < 2) {
    throw "List contains < 2 elements";
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

  const inputList = filterInputList(inputVal);

  // const outputListEl = getElement("user-list");

  // outputListEl.innerHTML =
  //   "Your element list : " + "<br>" + "[ " + inputEl.join(", ") + " ]";

  try {
    outputEl.innerHTML =
      `<span>Elements on odd positions :</span>` +
      `<p>[ ${returnElementsOnOddPositions(inputList).join(", ")} ]</p>`;
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
