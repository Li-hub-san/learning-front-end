// Lists, Strings
// 2. Write a function that returns the largest element in a list.

function getLargestWord(list) {
  if (list.length === 0) {
    throw "Input a word list";
  }

  let largestWord = list[0];
  let largestWordLength = largestWord.length;

  for (let i = 1; i < list.length; i++) {
    const currentWord = list[i];
    const currentWordLength = currentWord.length;

    if (currentWordLength > largestWordLength) {
      largestWord = currentWord;
      largestWordLength = currentWordLength;
    }
  }
  return largestWord;
}

function printResult() {
  const inputVal = getElement("input").value;
  const outputEl = getElement("output");

  const toWords = inputListToWords(inputVal);
  const outputList = buildHighlightedListOutput("", toWords);

  console.log("output list", outputList);

  outputEl.classList.remove("error");

  try {
    const result = inputListToWords(getLargestWord(toWords));
    const message = `<span>Longest word (${result[0].length}):<br></span>`;
    const formattedResult = formatListToOutput(result);
    outputEl.innerHTML = outputList + message + formattedResult;
  } catch (exception) {
    handleException(exception);
  }
  enableEl("reset");
}

function animateOutput(output) {
  let animated = `<span class="animated">${output[0]}</span>`;

  for (let i = 1; i < output.length; i++) {
    animated = `<span class="animated">${output[i]}</span>`;
  }
  return animated;
}
