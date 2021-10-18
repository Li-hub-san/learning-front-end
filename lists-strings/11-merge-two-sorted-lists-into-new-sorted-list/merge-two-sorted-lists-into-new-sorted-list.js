// Lists, Strings
// 12. Write a function that merges two sorted lists into a new sorted list.
// You can do this quicker than concatenating them followed by a sort.

function printSortedLists() {
  const inputList1El = getElement("list1");
  const inputList2El = getElement("list2");
  const outputMergedEl = getElement("output");

  const inputArray1 = inputValueToArray(inputList1El.value);
  const inputArray2 = inputValueToArray(inputList2El.value);

  inputArray1.sort(sortList);
  inputArray2.sort(sortList);

  const sortedLists =
    buildSortedListOutput(1, inputArray1) +
    buildSortedListOutput(2, inputArray2);

  const mergedLists = `<p>Merged and sorted list: <br>
    [ ${inputArray1.concat(inputArray2).sort(sortList).join(", ")} ]</p>`;

  outputMergedEl.innerHTML = sortedLists + mergedLists;

  enableEl("reset");
}

function buildSortedListOutput(listNumber, inputArr) {
  return `<p class="highlighted">Sorted list ${listNumber}: [ ${inputArr.join(
    ", "
  )} ]</p>`;
}

function sortList(a, b) {
  if (isNaN(a) || isNaN(b)) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    return 1;
  }
  return +a - +b;
}
