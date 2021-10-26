// Lists, Strings
// 12.Write a function that rotates a list by k elements. Try solving this without creating a copy of the list. How many swap or move operations do you need?

function rotateListByKElements(list, k) {
  let outputList = [];
  const originalList = [...list];

  if (list.length === 0) {
    throw "List must contain words or numbers";
  }

  if (k > list.length) {
    throw `Max rotation number for this input: ${list.length}`;
  }

  for (let i = 0; i < list.length; i++) {
    list = list.slice(k).concat(list.slice(0, k));
    outputList.push(list);

    if (list.join() === originalList.join()) {
      break;
    }
  }

  return outputList;
}

function printRotateListByKElements() {
  const inputListEl = getElement("inputList");
  const inputKEl = getElement("inputK");
  const outputEl = getElement("output");
  const submitEl = getElement("submit");

  outputEl.classList.remove("error");

  let elementText = "elements";
  if (+inputKEl.value === 1) {
    elementText = "element";
  }

  try {
    const inputArrVal = inputListToStrings(inputListEl.value);
    const formattedInputArrVal = formatListToOutput(inputArrVal, ", ");

    const rotatedLists = rotateListByKElements(inputArrVal, inputKEl.value);
    const formattedRotatedLists = formatListOfListsToOutput(rotatedLists);

    outputEl.innerHTML = `<p class="highlighted">Rotating a ${inputArrVal.length} element list: ${formattedInputArrVal} by ${inputKEl.value} ${elementText}:</p>`;
    outputEl.innerHTML += `<p>${formattedRotatedLists}</p>`;

    rotateButton(submitEl);
  } catch (exception) {
    handleException(exception);
  }
  enableEl("reset");
}

function formatListOfListsToOutput(list, glue = ", ") {
  return formatListToOutput(list).split(",").join(glue);
}

function rotateButton(el) {
  el.classList.remove("rotate");
  setTimeout(function () {
    el.classList.add("rotate");
  }, 50);
}

// document.getElementById("inputList").addEventListener("change", function () {
//   const inputArrVal = inputListToStrings(this.value).filter((n) => !!n);
//   getElement("inputK").setAttribute("max", inputArrVal.length);
// });
