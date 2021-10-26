// Lists, Strings
// 9.Write a function that concatenates two lists.

function concatenateAndPrintTwoLists() {
  const outputEl = getElement("output");

  const inputVal1 = getElement("list1").value;
  const inputArr1 = inputListToStrings(inputVal1);

  const inputVal2 = getElement("list2").value;
  const inputArr2 = inputListToStrings(inputVal2);

  outputEl.classList.remove("error");
  const outputsList1 = buildHighlightedListOutput("1", inputArr1);
  const outputsList2 = buildHighlightedListOutput("2", inputArr2);
  const outputMessage = `<span>Your concatenated list:</span><br>`;

  try {
    const output = concatArray(inputArr1, inputArr2);
    const formattedOutput = formatListToOutput(output, ", ");

    outputEl.innerHTML =
      outputsList1 + outputsList2 + outputMessage + formattedOutput;
  } catch (exception) {
    handleException(exception);
  }

  enableEl("reset");
}

function concatArray(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    throw "Input words or numbers";
  }

  return arr1.concat(arr2);
}
