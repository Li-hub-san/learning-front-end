// Elementary
// 3. Modify the previous program such that only the users Alice and Bob
// are greeted with their names.

// solution
/**
 * Returns name within some condition(s)
 * @param name
 * @returns {string} greeting with or without the name condition's depending.
 */
function greetByName(name) {
  name = name.toLowerCase();

  if (name === "alice" || name === "bob") {
    return "Hi " + capitalize(name) + "!";
  } else {
    return "Hello stranger!";
  }
}

function capitalize(name) {
  let firstLetter = name.charAt(0).toUpperCase();

  return firstLetter + name.slice(1);
}

// connecting solution to DOM
function printGreeting() {
  const userNameEl = getElement("input").value.replace(/[^\sA-Za-z]/g, "");
  const newArr = greetByName(userNameEl).split(",");

  let iIndex = 0; // start printing array at this position
  let iTextPos = 0; // initialise text position
  let sContents = ""; // initialise contents variable
  typewriter(newArr, newArr[0].length, iIndex, iTextPos, sContents); // animating output
}

function typewriter(array, arrLength, iIndex, iTextPos, sContents) {
  let iSpeed = 100; // time delay of print out
  let iScrollAt = 20; // start scrolling up at this many lines
  const cursor = "_";

  let iRow = Math.max(0, iIndex - iScrollAt);
  let destination = document.getElementById("output");

  while (iRow < iIndex) {
    sContents += array[iRow++] + "<br/>";
  }
  destination.innerHTML =
    sContents +
    array[iIndex].substring(0, iTextPos) +
    `<span class="anim-cursor">${cursor}</span>`;

  if (iTextPos++ === arrLength) {
    iIndex++;

    if (iIndex !== array.length) {
      arrLength = array[iIndex].length;
      setTimeout(function () {
        typewriter(array, arrLength, iIndex, iTextPos, sContents);
      }, 500);
    }
  } else {
    setTimeout(function () {
      typewriter(array, arrLength, iIndex, iTextPos, sContents);
    }, iSpeed);
  }
  enableEl("reset");
}
