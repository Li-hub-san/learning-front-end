// Javascript basic
// 4. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

/**
 * Moves the last element of the string placing it in the beginning as the new first element.
 * @param text the original string
 * @returns {string} String rotated right.
 */
function rotateStringRight(text) {
  return text[text.length - 1] + text.substring(0, text.length - 1);
}

let interval;

function animateString() {
  const outputEl = getElement("output");
  let text = outputEl.innerText;

  interval = setInterval(function () {
    text = rotateStringRight(text);
    outputEl.innerText = text;
  }, 200);

  enableEl("reset");
  disableEl("submit");
}

function resetButton() {
  enableEl("submit");
  disableEl("reset");

  clearInterval(interval);
  const outputEl = getElement("output");
  outputEl.innerText = "w3resource ";
}
