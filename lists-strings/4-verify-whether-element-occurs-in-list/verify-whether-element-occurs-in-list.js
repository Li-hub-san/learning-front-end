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

  if (filterWordList(element).length === 0) {
    throw "Empty";
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i] === lowerCaseEl) {
      return true;
    }
  }
  return false;
}

function printResult() {
  const inputEl = getElement("input").value;
  const outputEl = getElement("output");

  try {
    const result = listHasElement(secretList, inputEl);

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
    if (inputEl.toLowerCase() === "words") {
      outputEl.innerHTML = `<p id="slide">Did you really think it was going to be that easy?</p>`;
    }
  } catch (exception) {
    handleException(exception);
  }

  enableEl("reset");
}
