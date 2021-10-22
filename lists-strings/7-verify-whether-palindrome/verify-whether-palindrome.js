//Lists, Strings
// 7.Write a function that tests whether a string is a palindrome.
// Different way.

function checkIfPalindrome(name) {
  name = name.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  const reversedName = name.split("").reverse().join("");

  if (name === "") {
    throw "Input a word or a number";
  }

  if (name === reversedName) {
    return "Palindrome.";
  } else {
    return "NOT a palindrome.";
  }
}

function printResult() {
  enableEl("reset");

  const outputEl = getElement("output");
  outputEl.classList.remove("error");

  try {
    return printFunction("input", "output", checkIfPalindrome);
  } catch (exception) {
    handleException(exception);
  }
}
