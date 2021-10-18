// Elementary
// 2.Write a program that asks the user for their name and greets them with their name.

// connecting solution to DOM
function printGreetToUser() {
  const nameEl = getElement("input").value;
  const returnEl = getElement("output");

  returnEl.innerHTML = `<p><span>Hello </span><span>${nameEl}</span><span>!</span></p>`;
  enableEl("reset");
}

function greetUserByName(name) {
  const greet = "Hello ";
  return greet + name + "!";
}
