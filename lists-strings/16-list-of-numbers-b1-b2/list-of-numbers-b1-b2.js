// Lists, Strings
// 16. Write a function that takes a list of numbers, a starting base b1 and a target base b2 and interprets the list as a number
// in base b1 and converts it into a number in base b2 (in the form of a list-of-digits).
// So for example [2,1,0] in base 3 gets converted to base 10 as [2,1].

function changeNumberBase(number, b1, b2) {
  const array = number.toString().split("").reverse();

  let sumConverted = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    const currentValue = hexadecimalToDecimal(array[i], b1);
    const convertToDecimal = currentValue * Math.pow(b1, i);

    sumConverted += convertToDecimal;
  }

  return sumConverted.toString(b2).split("").join(", ");
}

function hexadecimalToDecimal(value, base) {
  let number;

  switch (value.toUpperCase()) {
    case "A":
      number = 10;
      break;

    case "B":
      number = 11;
      break;

    case "C":
      number = 12;
      break;

    case "D":
      number = 13;
      break;

    case "E":
      number = 14;
      break;

    case "F":
      number = 15;
      break;

    default:
      number = +value;
  }

  if (isNaN(number)) {
    throw "Invalid number";
  }

  if (number > base - 1) {
    throwInvalidBase(number + 1);
  }

  return number;
}

function throwInvalidBase(minBase) {
  throw `Invalid number base<br>Minimum base for current number : ${minBase}`;
}

function verifyBase(number, base) {
  let largestNumber = +number[0];
  for (let i = 1; i < number.length; i++) {
    let currentNumber = +number[i];

    if (currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
  }

  if (largestNumber >= base) {
    throwInvalidBase(largestNumber + 1);
  }
}

function printBaseNumbers() {
  const inputBase1 = +getElement("base1").value;
  const inputBase2 = +getElement("base2").value;
  const inputNumber = getElement("number").value;
  const outputEl = getElement("output");

  outputEl.classList.remove("error");

  try {
    verifyBase(inputNumber, inputBase1);
    const inputNumberElToArr = inputNumber.toString().split("").join(", ");
    const outputResult = changeNumberBase(inputNumber, inputBase1, inputBase2);
    outputEl.innerHTML =
      `<p><span class="highlighted">Your list - base ${inputBase1} : </span><span>[&nbsp;${inputNumberElToArr}&nbsp;]</span></p>` +
      `<p><span class="highlighted">New list - base ${inputBase2} : </span><span>[&nbsp;${outputResult}&nbsp;]</span></p>`;
  } catch (exception) {
    handleException(exception);
  }
  enableEl("reset");
}
