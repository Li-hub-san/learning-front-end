// Lists, Strings
// 14.Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,3,2].
//.map will work like a for i, but for arrays and we can do operations or replace the elements with whatever we want.

function printListOfDigits() {
  const inputEl = getElement("input");
  const outputEl = getElement("output");

  const message = `<p class="highlighted">Digit list:</p>`;
  const numberList = stringToNumberList(inputEl.value);
  const formattedOutput = formatListToOutput(numberList, ", ");

  outputEl.innerHTML = message + formattedOutput;

  enableEl("reset");
}

function stringToNumberList(n) {
  return n
    .split("")
    .filter((n) => !isNaN(n))
    .map((n) => +n);
}

function resetEls() {
  const inputEl = getElement("input");
  const outputEl = getElement("output");

  inputEl.value = "";
  outputEl.innerHTML = "";

  inputEl.focus();
  disableEl("reset");
}

// function inputNumberOutputListOfDigits(number) {
//   let myOutput = [];
//   let myNumberToString = number.toString();
//
//   for (let i = 0; i < myNumberToString.length; i++) {
//     myOutput.push(+myNumberToString.charAt(i));
//   }
//   return myOutput;
// }
