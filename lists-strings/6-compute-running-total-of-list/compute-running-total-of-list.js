// Lists, Strings
// 6.Write a function that computes the running total of a list.
function runningTotalOfList(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    total = total + list[i];
  }

  return total;
}

function sumOfNumbersInListUsingWhileLoop(list) {
  let i = 0;
  let totalSum = 0;

  while (i < list.length) {
    totalSum = totalSum + list[i];
    i++;
  }

  return totalSum;
}

function sumOfNumbersInListUsingRecursion(list) {
  if (list.length === 0) {
    return 0;
  }

  return list[0] + sumOfNumbersInListUsingRecursion(list.slice(1));
}

// let list = [3, 7, 12, 5];
// console.log(runningTotalOfList(list));

function printResult() {
  const numbers = getElement("input")
    .value.replace(/[^0-9]+/g, ",")
    .split(",")
    .map(function (el) {
      return +el;
    });

  const outputEl = getElement("output");

  const value = getElement("dropdown").getAttribute("value");
  switch (value) {
    case "for":
      outputEl.innerHTML = runningTotalOfList(numbers).toString();
      break;
    case "while":
      outputEl.innerHTML = sumOfNumbersInListUsingWhileLoop(numbers).toString();
      break;
    case "recursion":
      outputEl.innerHTML = sumOfNumbersInListUsingRecursion(numbers).toString();
      break;
  }

  enableEl("reset");
}

function resetData() {
  disableEl("reset");
  enableEl("submit");

  const inputEl = getElement("input");
  const outputEl = getElement("output");
  const inputListEl = getElement("user-list");

  inputEl.value = "";
  inputEl.focus();
  outputEl.innerHTML = "";
  inputListEl.innerHTML = "";
}

$(".dropdown-menu a").on("click", function () {
  $(".dropdown-toggle").html($(this).html() + '<span class="caret"></span>');
  const value = this.parentNode.getAttribute("value");
  getElement("dropdown").setAttribute("value", value);
});
