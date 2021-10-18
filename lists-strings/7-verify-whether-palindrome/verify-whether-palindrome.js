//Lists, Strings
// 7.Write a function that tests whether a string is a palindrome.
// Different way.

function checkIfPalindrome(name) {
  name = name.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  const reversedName = name.split("").reverse().join("");

  if (name === "") {
    return "Nothing found.";
  }

  if (name === reversedName) {
    return "Palindrome.";
  } else {
    return "NOT a palindrome.";
  }
}

// const arrayIfPalindrome = [
//   "jose",
//   "luis",
//   "ana",
//   "madam",
//   "Reviver",
//   "reviveR",
//   "12321",
// ];
//
// for (let i = 0; i < arrayIfPalindrome.length; i++) {
//   // console.log(i)
//   const allocateName = arrayIfPalindrome[i];
//   console.log(checkIfPalindrome(allocateName));
// }

// console.log(checkForPalindrome("joana"));
// console.log(checkForPalindrome("a"));
// console.log(checkForPalindrome("reviver"));
// console.log(checkForPalindrome("Reviver"));
// console.log(checkForPalindrome("madam"));
// console.log(checkForPalindrome("ana"));
// console.log(checkForPalindrome("Ana"));
// console.log(checkForPalindrome("12321"));
//
// console.log(checkForPalindrome("ala"));

//on-line solution

function palindromeOrNot(name) {
  const changeString = name.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  let ccount = 0;

  if (changeString === "") {
    return "Nothing Found";
  }

  if (changeString.length % 2 === 0) {
    ccount = changeString.length / 2;
  } else {
    if (changeString.length === 1) {
      return "Entry " + name + " is a palindrome.";
    } else {
      ccount = (name.length - 1) / 2;
    }
  }

  for (let x = 0; x < ccount; x++) {
    if (changeString[x] !== changeString.slice(-1 - x)[0]) {
      return "Entry " + name + " is not a palindrome.";
    }
  }

  return "Entry " + name + " is a palindrome.";
}

// console.log(palindromeOrNot("Madam"));
// console.log(palindromeOrNot("Ana"));
// console.log(palindromeOrNot("Reviver"));
// console.log(palindromeOrNot("12321!!????"));
// console.log(palindromeOrNot("aNa"));
// console.log(palindromeOrNot("jorge"));
// console.log(palindromeOrNot(""));
// console.log(palindromeOrNot("b"));

function printResult() {
  enableEl("reset");
  return printFunction("input", "output", checkIfPalindrome);
}
