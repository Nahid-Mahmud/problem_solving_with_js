"use strict";

function oddEven(number) {
  if (number % 2 === 1) {
    return false;
  } else if (number % 2 === 0) {
    return true;
  } else {
    console.log(`Please enter a Real Number`);
  }
}
console.log(oddEven(98));
console.log(oddEven(117));
