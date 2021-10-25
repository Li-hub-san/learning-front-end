// Lists, Strings
// 6.Write a function that computes the running total of a list.
function runTotalUsingLoop(numbers, loopType) {
  switch (loopType) {
    case "for-loop":
      return runningTotalUsingForLoop(numbers);

    case "while-loop":
      return runningTotalUsingWhileLoop(numbers);

    case "recursion":
      return runningTotalUsingRecursion(numbers);

    default:
      throw "Select a loop type";
  }
}

function runningTotalUsingForLoop(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    total = total + list[i];
  }

  return total;
}

function runningTotalUsingWhileLoop(list) {
  let i = 0;
  let totalSum = 0;

  while (i < list.length) {
    totalSum = totalSum + list[i];
    i++;
  }

  return totalSum;
}

function runningTotalUsingRecursion(list) {
  if (list.length === 0) {
    return 0;
  }

  return list[0] + runningTotalUsingRecursion(list.slice(1));
}

function printResult() {
  const inputEl = getElement("input");
  const outputEl = getElement("output");
  const dropdownEl = getElement("dropdown");

  const inputVal = inputEl.value;
  const numbers = inputListToNumbers(inputVal);
  const dropdownValue = dropdownEl.getAttribute("value");

  outputEl.classList.remove("error");
  try {
    let result;
    const inputList = buildHighlightedListOutput("", numbers);
    const message = `<span>Total using ${dropdownValue}:<br></span>`;
    result = runTotalUsingLoop(numbers, dropdownValue);
    const formattedResult = formatListToOutput([result]);
    outputEl.innerHTML =
      inputList + message.replace("-", " ") + formattedResult;

    enableEl("reset");
  } catch (exception) {
    handleException(exception);
  }
}

function resetData() {
  disableEl("reset");
  enableEl("submit");

  const inputEl = getElement("input");
  const outputEl = getElement("output");

  outputEl.innerHTML = "";
  inputEl.value = "";
  inputEl.focus();
}

$(".dropdown-menu a").on("click", function () {
  $(".dropdown-toggle").html($(this).html() + '<span class="caret"></span>');
  const value = this.parentNode.getAttribute("value");
  getElement("dropdown").setAttribute("value", value);
});
