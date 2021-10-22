// Lists, Strings
// 13.Write a function that computes the list of the first 100 Fibonacci numbers. The first two Fibonacci numbers are 1 and 1. The 1st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

function getFirstNFibonacciNumbers(n) {
  let n1 = 0;
  let n2 = 1;
  let fbSequenceToN = [];

  for (let i = 1; i <= n; i++) {
    let nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
    fbSequenceToN.push(n1);
  }
  return fbSequenceToN;
}

function printGetFirstNFibonacciNumbers() {
  const inputEl = getElement("input");
  const outputEl = getElement("output");

  let numberText = inputEl.value + " numbers";
  if (+inputEl.value === 1) {
    numberText = "number";
  }

  outputEl.innerHTML =
    `<p class="highlighted">The first ${numberText} in the Fibonacci sequence:</p>` +
    `<p>[&nbsp;${getFirstNFibonacciNumbers(inputEl.value).join(
      ", "
    )}&nbsp;]</p>`;

  enableEl("reset");
}

function resetInputsAndOutputs() {
  const inputEl = getElement("input");
  const outputEl = getElement("output");

  inputEl.value = "";
  outputEl.innerHTML = "";
  disableEl("reset");
  inputEl.focus();
}
