//  Find The largest number in an Array of Integers

"use strict";

const numbers = [10, 2, 20, 30, 50, 88, 12, 96, 45, 78, 125, 2, 36, 365];

const biggestNumber = function (arr) {
  let largeNumber = 0;

  //   Making sure to have all the values are integers
  for (let x = 0; x < arr.length; x++) {
    if (typeof arr[x] !== typeof largeNumber) {
      return "Make sure all Values are Number In the array";
    }
  }

//   Actual Loop for fungding Largest Number
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largeNumber) {
      largeNumber = arr[i];
    } else {
      continue;
    }
  }
  return largeNumber;
};

console.log(biggestNumber(numbers));
