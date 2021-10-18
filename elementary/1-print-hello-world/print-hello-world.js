// Elementary
// 1. Write a program that prints ‘Hello World’ to the screen.

function updatePrintElText(greeting, who) {
  const printEl = getElement("output");
  printEl.innerHTML = `<p><span class="greeting">${greeting} </span><span class="who">${who}</span></p>`;
}

// solution
function printGreeting() {
  updatePrintElText("Hello", "World!");

  disableEl("submit");
  enableEl("reset");
}
