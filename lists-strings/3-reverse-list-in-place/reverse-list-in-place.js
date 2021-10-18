// Lists, Strings
// 3.Write function that reverses a list, preferably in place.

function reverseAListInPlace(list) {
  let length = list.length;

  if (length > 1) {
    return list.reverse().join(", ");
  }
  if (length !== 0) {
    if (length === 1) {
      throw "List < 2 Elements";
    }
  } else {
    throw "Empty list";
  }
}

// arrayList = reverseAListInPlace(arrayList);
// console.log("after: ", arrayList);
// ----------------------------------------------------------
// Changing a string in place. Because strings are primitives, you have to pass by reference (as opposed to copy).
// Functions don't change primitives, but change objects.

// function changeAStringInPlace(string) {
//   return string + " and stuff";
// }

function printResult() {
  const inputListVal = getElement("input").value;
  const outputEl = getElement("output");

  const clearedInputVal = filterInputList(inputListVal);
  outputEl.classList.remove("error");

  let word = "list";
  if (clearedInputVal.length === 1) {
    word = "word";
  }
  try {
    outputEl.innerHTML = `<p>Reversed ${word}:<br>[ ${reverseAListInPlace(
      clearedInputVal
    )} ]</p>`;
  } catch (exception) {
    handleException(exception);
  }
  enableEl("reset");
}
