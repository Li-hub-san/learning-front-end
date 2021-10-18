// Elementary
// 8. Write a program that prints all prime numbers.
// 8. Write a program that verifies is a number if a prime number.
// (Note: if your programming language does not support arbitrary size numbers, printing all primes
// up to the largest number you can easily represent is fine too.)

function verifyIfPrime(number) {
  for (let i = 2, s = Math.sqrt(+number); i <= s; i++)
    if (number % i === 0) return "Not a prime number";
  if (number > 1) {
    return "Prime";
  }
}

function printResult() {
  printFunction("input", "output", verifyIfPrime);
  enableEl("reset");
}
