// Lists, Strings
// 4.Write a function that checks whether an element occurs in a list

const secretList = [
  "list",
  "short",
  "long",
  "strings",
  "exercise",
  "development",
];

/**
 *
 * @param {string[]} list
 * @param {string} element
 * @returns {boolean}
 */
function listHasElement(list, element) {
  const lowerCaseEl = element.toLowerCase();

  if (inputListToWords(element).length === 0) {
    throw "Input any word";
  }

  console.log(element, element.split(" ").length);
  if (element.split(" ").length > 1) {
    throw "Try one word at a time";
  }

  for (let i = 0; i < list.length; i++) {
    if (list[i] === lowerCaseEl) {
      return true;
    }
  }
  return false;
}

function printResult() {
  const inputVal = getElement("input").value;
  console.log(inputVal);
  const outputEl = getElement("output");

  try {
    const result = listHasElement(secretList, inputVal);

    if (result) {
      outputEl.innerHTML = `<p id="positive">
        <span>T</span>
        <span>R</span>
        <span>U</span>
        <span>E</span></p>`;
    } else {
      outputEl.innerHTML = `
      <p id="negative">
        <span>F</span>
        <span>A</span>
        <span>L</span>
        <span>S</span>
        <span>E</span>
      </p>`;
    }
    if (inputVal.toLowerCase() === "words") {
      outputEl.innerHTML = `<p>Did you really think it was going to be that easy?</p>`;
    }
  } catch (exception) {
    handleException(exception);
  }

  enableEl("reset");
}
