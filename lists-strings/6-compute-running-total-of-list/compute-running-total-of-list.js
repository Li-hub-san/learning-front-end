// Lists, Strings
// 6.Write a function that computes the running total of a list.
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
      outputEl.innerHTML = runningTotalUsingForLoop(numbers).toString();
      break;
    case "while":
      outputEl.innerHTML = runningTotalUsingWhileLoop(numbers).toString();
      break;
    case "recursion":
      outputEl.innerHTML = runningTotalUsingRecursion(numbers).toString();
      break;
  }
  enableEl("reset");
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
