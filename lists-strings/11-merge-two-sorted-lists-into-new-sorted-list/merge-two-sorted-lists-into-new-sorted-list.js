// Lists, Strings
// 11. Write a function that merges two sorted lists into a new sorted list.
// You can do this quicker than concatenating them followed by a sort.

function sortNumbersAndStrings(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return sortStrings(a, b);
  }
  return sortNumbers(a, b);
}

function sortStrings(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  return 1;
}

function sortNumbers(a, b) {
  return +a - +b;
}

function printSortedLists() {
  const inputList1El = getElement("list1");
  const inputList2El = getElement("list2");
  const outputMergedEl = getElement("output");

  const inputArray1 = inputListToStrings(inputList1El.value);
  const inputArray2 = inputListToStrings(inputList2El.value);

  try {
    validateEmptyList(inputArray1, inputArray2);

    inputArray1.sort(sortNumbersAndStrings);
    inputArray2.sort(sortNumbersAndStrings);

    const sortedLists =
      buildHighlightedListOutput(1, inputArray1) +
      buildHighlightedListOutput(2, inputArray2);
    outputMergedEl.classList.remove("error");

    const message = `<p>Merged and sorted list: <br>`;
    const concatenatedLists = inputArray1
      .concat(inputArray2)
      .sort(sortNumbersAndStrings);

    const formattedOutput = formatListToOutput(concatenatedLists, ", ");

    outputMergedEl.innerHTML = sortedLists + message + formattedOutput;
  } catch (exception) {
    handleException(exception);
  }

  enableEl("reset");
}
