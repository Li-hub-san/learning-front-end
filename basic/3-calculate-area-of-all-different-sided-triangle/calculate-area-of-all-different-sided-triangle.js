// Javascript basic
// 3. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 4, 5, 6.

/**
 * Returns the area of any triangle using Heron's formula.
 * @param s1 side 1
 * @param s2 side 2
 * @param s3 side 3
 * @returns {string|number} The area of the triangle.
 * @throws InvalidParameter - One of the sides cannot be equal or longer than the sum of the other two.
 */
function calculateTriangleArea(s1, s2, s3) {
  const sp = (s1 + s2 + s3) / 2;

  if (s1 >= s2 + s3 || s2 >= s1 + s3 || s3 >= s1 + s2) {
    throw "One side >= sum of two sides";
  }

  return Math.sqrt(sp * (sp - s1) * (sp - s2) * (sp - s3));
}

function printResult() {
  const s1ElValue = +getElement("side1").value;
  const s2ElValue = +getElement("side2").value;
  const s3ElValue = +getElement("side3").value;
  const outputEl = getElement("output");

  outputEl.classList.remove("error");

  try {
    outputEl.innerHTML = `<span><i class="bi-triangle"></i> Area = ${calculateTriangleArea(
      s1ElValue,
      s2ElValue,
      s3ElValue
    )}</span>`;
  } catch (exception) {
    handleException(exception);
  }

  enableEl("reset");
}
