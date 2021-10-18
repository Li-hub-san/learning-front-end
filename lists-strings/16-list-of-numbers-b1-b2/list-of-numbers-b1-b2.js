// Lists, Strings
// 16. Write a function that takes a list of numbers, a starting base b1 and a target base b2 and interprets the list as a number
// in base b1 and converts it into a number in base b2 (in the form of a list-of-digits).
// So for example [2,1,0] in base 3 gets converted to base 10 as [2,1].

// function umNomeQualquer(numbers, b1, b2) {
//   const inputBase = +numbers.toString(10);
//   return inputBase.toString(b2);
// }
//
// console.log("output", umNomeQualquer(32569, 2, 10).split("").join(","));

const number = 21121100;

// console.log(number, " to array: ", array);

const hexaDecimal = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

function doSomething(number, b1, b2) {
  const array = number.toString().split("").reverse();

  let convertToDecimal = 0;
  let sumConverted = 0;

  if (b1 !== 10) {
    for (let i = array.length - 1; i >= 0; i--) {
      let currentValue = array[i];

      if (isNaN(+currentValue)) {
        // if (!!hexaDecimal[currentValue]) {
        //   currentValue = hexaDecimal[currentValue]
        // } else {
        //   throw "Can't do this!";
        // }

        switch (currentValue.toUpperCase()) {
          case "A":
            currentValue = 10;
            break;

          case "B":
            currentValue = 11;
            break;

          case "C":
            currentValue = 12;
            break;

          case "D":
            currentValue = 13;
            break;

          case "E":
            currentValue = 14;
            break;

          case "F":
            currentValue = 15;
            break;

          default:
            throw "Can't do this!";
        }
      }

      convertToDecimal = currentValue * Math.pow(b1, i);
      sumConverted += convertToDecimal;
    }
  }

  return sumConverted.toString(b2).split("").join(", ");
}

function printBaseNumbers() {
  const inputBase1 = +getElement("base1").value;
  const inputBase2 = +getElement("base2").value;
  const inputNumber = getElement("number").value;
  const outputEl = getElement("output");

  const outputResult = doSomething(inputNumber, inputBase1, inputBase2);

  const inputNumberElToArr = inputNumber.toString().split("").join(", ");

  outputEl.innerHTML =
    `<p><span class="highlighted">Your list - base ${inputBase1} : </span><span>[ ${inputNumberElToArr} ]</span></p>` +
    `<p><span class="highlighted">New list - base ${inputBase2} : </span><span>[ ${outputResult} ]</span></p>`;
}
