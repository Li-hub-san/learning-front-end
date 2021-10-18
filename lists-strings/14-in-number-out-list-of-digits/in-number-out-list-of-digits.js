// Lists, Strings
// 14.Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,3,2].
//.map will work like a for i, but for arrays and we can do operations or replace the elements with whatever we want.

function printListOfDigits() {
  const inputEl = getElement("input");
  const outputEl = getElement("output");

  const result = inNOutList(inputEl.value).join(", ");

  outputEl.innerHTML =
    `<p class>Digit list of ${inputEl.value}:</p>` + `<p>[ ${result} ]</p>`;

  enableEl("reset");
}

function inNOutList(n) {
  return n
    .toString()
    .split("")
    .map(function (el) {
      return +el;
    });
}

function resetEls() {
  const inputEl = getElement("input");
  const outputEl = getElement("output");

  inputEl.value = "";
  outputEl.innerHTML = "";

  inputEl.focus();
  disableEl("reset");
}

function inputNumberOutputListOfDigits(number) {
  let myOutput = [];
  let myNumberToString = number.toString();

  for (let i = 0; i < myNumberToString.length; i++) {
    myOutput.push(+myNumberToString.charAt(i));
  }
  return myOutput;
}

// 14.1.wrote a function that takes a string and returns a number (just for fun)

// let input = "Input value: ";
// let output = "Output value: ";
// let number = 2342;
// let myNumber = 6565468798798787;
// let array = ["2", "3", "4", "2"];
//
// console.log(input, number);
// console.log(output, inNOutList(number));
//
// console.log(input, myNumber);
// console.log(output, inputNumberOutputListOfDigits(myNumber));
//
// console.log(input, array);
// console.log(output, inStringOutN(array));
// console.log(output, "1 ", inStringOutN(["123"]));
// console.log(output, "2 ", inStringOutN(["8", "8", "6"]));
// console.log(output, "3 ", inStringOutN(["ten"]));
// console.log(output, "3 ", inStringOutN([456]));
