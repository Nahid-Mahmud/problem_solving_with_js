"use strict";

//  Declaring array
const arrayOfIntegers = [5, 7, 8, 10, 45, 30];

// function to calculate odd numbers of an array

function findOddSum(arr) {
  if (Array.isArray(arr)) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        continue;
      }
      sum += arr[i];
    }
    return sum;
  } else {
    return `Not an Array `;
  }
}
console.log(findOddSum(arrayOfIntegers));
