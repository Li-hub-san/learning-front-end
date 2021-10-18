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

  const refactoredInputEl = filterWordList(inputVal);

  try {
    let result = getLargestWord(refactoredInputEl);
    for (let i = 0; i < result.length; i++) {
      let currentLetter = result[i];

      setTimeout(function () {
        let span = document.createElement("span");
        span.innerText = currentLetter;
        span.classList.add("animated");

        outputEl.appendChild(span);
      }, (1000 * (i + 1)) / 10);
    }
    outputEl.innerHTML = `<p>Longest word:</p>
    <p class="highlighted">Length: ${result.length}</p>`;
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
