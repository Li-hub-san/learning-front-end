// Javascript basic
// 4. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string
// and attaching it to the front.

// function rotateStringRightPeriodically(string) {
//   string = string.split("");
//
//   for (let i = 0; i < string.length; i++) {
//     let rotatedString = [];
//     rotatedString = string.splice(string.length - 1);
//     string = rotatedString.concat(string);
//     console.log(string.join(""));
//   }
// }
//
// let string = "w3resource";
// console.log(rotateStringRightPeriodically(string));

// function rotateStringRightPeriodically(string) {
//   string = string.split("");
//
//   for (let i = string.length; i > 0; i--) {
//     let rotatedString = [];
//     rotatedString = string.splice(1);
//     string = rotatedString.concat(string);
//     console.log(i, string.join(""));
//   }
// }
//
// let string = "w3resource";
// console.log("input :", string);
// console.log(rotateStringRightPeriodically(string));

// let array = [1, 2, 3];
//
// setInterval(() => {
//   array.push(array.shift());
//   console.log(JSON.stringify(array));
// }, 1000);

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
