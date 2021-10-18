// Lists, Strings
// 10.Write a function that concatenates two lists.

// function concatenateTwoLists(list1, list2) {
//   return list1.concat(list2);
// }
//
// const listA = ["a", "b", "c"];
// const listB = [1, 2, 3];
//
// console.log(concatenateTwoLists(listA, listB));

function concatenateAndPrintTwoLists() {
  const outputEl = getElement("output");
  const outputMessage = "Your concatenated list: " + "<br>";

  const inputVal1 = getElement("list1").value;
  const inputArr1 = filterInputList(inputVal1);

  const inputVal2 = getElement("list2").value;
  const inputArr2 = filterInputList(inputVal2);

  outputEl.classList.remove("error");

  try {
    outputEl.innerHTML =
      outputMessage +
      "[ " +
      concatArray(inputArr1, inputArr2).join(", ") +
      " ]";
  } catch (exception) {
    handleException(exception);
  }

  enableEl("reset");
}

function concatArray(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    throw "Empty list";
  }

  return arr1.concat(arr2);
}
