// Lists, Strings
// 10.Write a function that combines two lists by alternating taking elements, e.g. [a,b,c],[1,2,3] becomes [a,1,b,2,c,3]

function alternatingElementsBetweenTwoLists(list1, list2) {
  validateEmptyList(list1, list2);

  let result = [];
  while (list1.length > 0 || list2.length > 0) {
    if (list1.length > 0) {
      result.push(list1.shift());
    }

    if (list2.length > 0) {
      result.push(list2.shift());
    }
  }
  return result;
}

function printAlternatedList() {
  const inputList1Val = getElement("list1").value;
  const inputList2Val = getElement("list2").value;
  const outputEl = getElement("output");

  const inputArr1 = inputListToStrings(inputList1Val);
  const inputArr2 = inputListToStrings(inputList2Val);

  const listOutput =
    buildHighlightedListOutput(1, inputArr1) +
    buildHighlightedListOutput(2, inputArr2);
  outputEl.classList.remove("error");

  try {
    const result = alternatingElementsBetweenTwoLists(inputArr1, inputArr2);

    outputEl.innerHTML =
      listOutput +
      `<span>New alternated list:</span><br>` +
      formatListToOutput(result, ", ");
  } catch (exception) {
    handleException(exception);
  }
  enableEl("reset");
}
