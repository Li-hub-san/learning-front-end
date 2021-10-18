// Lists, Strings
// 11.Write a function that combines two lists by alternating taking elements, e.g. [a,b,c],

function alternatingElementsBetweenTwoLists(list1, list2) {
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

  const inputArr1 = filterInputList(inputList1Val);
  const inputArr2 = filterInputList(inputList2Val);

  const result = alternatingElementsBetweenTwoLists(inputArr1, inputArr2);
  outputEl.innerHTML = "[ " + result.join(", ") + " ]";
  enableEl("reset");
}
