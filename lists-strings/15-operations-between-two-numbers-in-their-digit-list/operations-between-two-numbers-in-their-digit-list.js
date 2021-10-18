// Lists, Strings
// 15.Write functions that add, subtract, and multiply two numbers in their digit-list representation (and return a new digit list).
// If you’re ambitious you can implement Karatsuba multiplication.
// Try different bases. What is the best base if you care about speed?
// If you could not completely solve the prime number exercise above due to the lack of large numbers in your language,
// you can now use your own library for this task.

function printOperationBetweenLists() {
  const number1 = +getElement("number1").value;
  const number2 = +getElement("number2").value;
  const outputEl = getElement("output");

  const sumResult = sum(number1, number2);
  const outputSum = numberToList(sumResult).join(", ");

  const subResult = sub(number1, number2);
  const outputSub = numberToList(subResult).join(", ");

  const prodResult = product(number1, number2);
  const outputProd = numberToList(prodResult).join(", ");

  const divResult = division(number1, number2);
  const outputDiv = numberToList(divResult).join(", ");

  outputEl.innerHTML =
    `<p class="highlighted">[ ${numberToList(number1).join(
      ", "
    )} ]<br>[ ${numberToList(number2).join(", ")} ]<p/>` +
    `<p>Sum: ${sumResult}<br><span class="highlighted">New list: </span>[ ${outputSum} ]</p>` +
    `<p>Subtraction: ${subResult}<br><span class="highlighted">New list: </span>[ ${outputSub} ]</p>` +
    `<p>Product: ${prodResult}<br><span class="highlighted">New list: </span>[ ${outputProd} ]</p>` +
    `<p>Division: ${divResult}<br><span class="highlighted">New list: </span>[ ${outputDiv} ]</p>`;

  enableEl("reset");
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("You cannot divide by 0");
  }
  return a / b;
}

function numberToList(number) {
  return number
    .toString()
    .split("")
    .map(function (digit) {
      return digit === "." || digit === "," || digit === "-" ? digit : +digit;
    });
}

// let digitList1 = 53;
// let digitList2 = 12;
// let outputList = "Output: ";

// console.log("list 1: ", digitList1);
// console.log("list 2: ", digitList2);
// console.log(
//   outputList,
//   operationBetweenNumbersWithinList(digitList1, digitList2, "+")
// );
// console.log(
//   outputList,
//   operationBetweenNumbersWithinList(digitList1, digitList2, "-")
// );
// console.log(
//   outputList,
//   operationBetweenNumbersWithinList(digitList1, digitList2, "*")
// );
// console.log(
//   outputList,
//   operationBetweenNumbersWithinList(digitList1, digitList2, "/")
// );
