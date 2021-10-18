// Elementary
// 7. Write a program that prints a multiplication table for numbers up to 12.

// function multiplyTable(multiplier) {
//   // console.log("Multiplication table up to 12. Multiplier: " + multiplier);
//
//   for (let i = 0; i <= 12; i++) {
//     let result = i * multiplier;
//
//     console.log(
//       multiplier +
//       " x " +
//       formatVariable(i, 2) +
//       " = " +
//       formatVariable(result, 3)
//     );
//   }
// }

function multiplicationTable() {
  const multiplierEl = +document.getElementById("input").value;
  const divEl = document.getElementById("output");
  divEl.innerHTML = "";

  const maxValue = multiplierEl * 12;

  for (let i = 0; i <= 12; i++) {
    let result = i * multiplierEl;
    let p = document.createElement("pre");
    p.setAttribute("class", "new");
    p.innerHTML =
      multiplierEl +
      " × " +
      formatVariable(i, 2) +
      " = " +
      formatVariable(result, maxValue.toString().length);

    divEl.appendChild(p);
  }

  enableEl("reset");
}

function formatVariable(variable, caseCount) {
  return variable.toString().padStart(caseCount, " ");
}
