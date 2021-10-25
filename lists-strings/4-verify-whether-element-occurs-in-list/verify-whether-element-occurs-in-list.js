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

function validateNeedle(needle) {
  if (inputListToWords(needle).length === 0) {
    throw "Input any word";
  }

  if (needle.split(" ").length > 1) {
    throw "Try one word at a time";
  }
}

/**
 * Check if string exists within list.
 * @param {string[]} haystack list to iterate
 * @param {string} needle string to look for
 * @returns {boolean} Whether list contains the string.
 */
function listContainsString(haystack, needle) {
  validateNeedle(needle);

  const lowerCaseNeedle = needle.toLowerCase();

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i].toLowerCase() === lowerCaseNeedle) {
      return true;
    }
  }
  return false;
}

function printResult() {
  const inputVal = getElement("input").value;
  const outputEl = getElement("output");

  const message = `<span>[&nbsp;${inputVal}&nbsp;] is </span>`;

  try {
    const result = listContainsString(secretList, inputVal);

    if (result) {
      outputEl.innerHTML =
        message +
        "in my list" +
        `<p id="positive">
        <span>T</span>
        <span>R</span>
        <span>U</span>
        <span>E</span></p>`;
    } else {
      outputEl.innerHTML =
        message +
        "not in my list" +
        `
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
