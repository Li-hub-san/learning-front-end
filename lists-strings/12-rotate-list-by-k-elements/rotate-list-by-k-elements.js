// Lists, Strings
// 13.Write a function that rotates a list by k elements.
// Try solving this without creating a copy of the list. How many swap or move operations do you need?

//Tried solving without a for i just to see how it would work.

// function rotateList(list) {
//   let a = list.splice(0, 2);
//   // console.log("1st splice : ", a);
//   // console.log(list);
//   let b = list.concat(a);
//   console.log("1st splice + concat: ", b);
//
//   let c = b.splice(0, 2);
//   // console.log("2nd splice: ", c);
//   // console.log("var b: ", b);
//   let d = b.concat(c);
//   console.log("2nd splice + concat: ", d);
//
//   let e = d.splice(0, 2);
//   // console.log("var e: ", e);
//   // console.log(d);
//
//   let f = d.concat(e);
//   console.log("3rd splice + concat: ", f);
//
//   return f;
// }
//
//
// console.log("my original list: ", list);
// console.log("My rotated list: ", rotateList(list));
// console.log(list);

//My version of the previous, simplified by Vitor
//Used a splice so the original list returns without the first elements that were cut.
// Splice changes the original array.

// function rotateElementsOnList(listA) {
//   let newList = [...listA];
//
//   let length = newList.length - 1;
//   if (newList.length % 2 === 0) {
//     length = (newList.length - 2);
//   }
//
//   for (let i = 1; i++) {
//     let a = newList.splice(0, 2);
//     newList = newList.concat(a);
//     console.log("current list: ", newList);
//   }
//
//   return newList;
// }
//
// const list = [];
// console.log("My original list: ", list);
// console.log("My rotated list: ", rotateElementsOnList(list));
// console.log(list);

//My final version but with a slice (instead of splice that changes the original array) that maintains the original array.
// Works with a copy of the original array.

function rotateListByKElements(list, k) {
  let outputList = [];
  const originalList = [...list];

  for (let i = 0; i < list.length; i++) {
    list = list.slice(k).concat(list.slice(0, k));
    outputList.push(list);

    if (list.join() === originalList.join()) {
      break;
    }
  }
  return outputList;
}

// let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let k = 2;
//
// console.log("My initial list: ", myList);
// console.log("My rotated list is: ", rotateListByKElement(myList, k));
// console.log(myList);

function printRotateListByKElements() {
  const inputListEl = getElement("inputList");
  const inputKEl = getElement("inputK");
  const outputEl = getElement("output");
  const submitEl = getElement("submit");

  submitEl.classList.remove("rotate");
  setTimeout(function () {
    submitEl.classList.add("rotate");
  }, 50);

  let elementText = "elements";
  if (+inputKEl.value === 1) {
    elementText = "element";
  }

  const inputArrVal = inputValueToArray(inputListEl.value).filter((n) => n);
  console.log(inputArrVal, inputArrVal.length);

  const rotatedLists = rotateListByKElements(inputArrVal, inputKEl.value);
  let output = `[ ${rotatedLists.join(" ] <br> [ ").replaceAll(",", ", ")} ]`;

  outputEl.innerHTML =
    `<p class="highlighted">Rotating a ${
      inputArrVal.length
    } element list: [ ${inputArrVal.join(", ")} ] by ${
      inputKEl.value
    } ${elementText}:</p>` +
    // `<p class="highlighted">` +
    `<p>${output}</p>`;

  enableEl("reset");
}

document.getElementById("inputList").addEventListener("change", function () {
  const inputArrVal = inputValueToArray(this.value).filter((n) => !!n);
  getElement("inputK").setAttribute("max", inputArrVal.length);
});
