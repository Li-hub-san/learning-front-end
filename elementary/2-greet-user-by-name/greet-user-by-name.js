// Elementary
// 2.Write a program that asks the user for their name and greets them with their name.

// connecting solution to DOM
function printGreetToUser() {
  const nameEl = getElement("input").value;
  const outputEl = getElement("output");

  try {
    outputEl.innerHTML = `<p><span>Hello </span><span>${greetUserByName(
      nameEl
    )}</span><span>!</span></p>`;
  } catch (exception) {
    handleException(exception);
  }

  enableEl("reset");
}

function greetUserByName(name) {
  validateOneName(name);

  return name;
}

function validateOneName(name) {
  if (name.split(" ").length > 1) {
    throw "Input one name";
  }
  return name;
}
