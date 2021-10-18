// Lists, Strings
// 17.Implement the following sorting algorithms:
// 1.Selection sort, Insertion sort, Merge sort, Quick sort, Stooge Sort. Check Wikipedia for descriptions.

function selectionSort(array) {
  let range = array.length;

  for (let i = 0; i < range; i++) {
    let min = i;
    // console.log(array[i]);
    for (let j = i + 1; j < range; j++) {
      if (array[j] < array[min]) {
        min = j;
        // console.log(array[j]);
      }
    }
    if (min !== i) {
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
      // console.log(tmp);
    }
  }
  return array;
}

let input = "in : ";
let output = "out : ";

const arrayNumbers = [5, 3, 2, 7, 6, 1];
const arrayNumbers1 = [120, 52, 35, 230];
const arrayNumbers2 = ["hi", "5", "ana", "zed", "2", "test", "525", "hello"];
const arrayNumbers3 = ["Ana", "Zed", "Test", "Break"];
const arrayNumbers4 = ["ana", "Zed", "test", "Break"];
const arrayNumbers5 = [1, 3, 5, 7, "2", "4", "6"];

console.log(input, arrayNumbers);
console.log(output, selectionSort(arrayNumbers));

console.log(input, arrayNumbers1);
console.log(output, selectionSort(arrayNumbers1));

console.log(input, arrayNumbers2);
console.log(output, selectionSort(arrayNumbers2));

console.log(input, arrayNumbers3);
console.log(output, selectionSort(arrayNumbers3));

console.log(input, arrayNumbers4);
console.log(output, selectionSort(arrayNumbers4));

console.log(input, arrayNumbers5);
console.log(output, selectionSort(arrayNumbers5));
