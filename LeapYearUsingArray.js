"use strict";

const findLeapYear = [2023, 2024, 2025, 2028, 2030, 1700];
// console.log(findLeapYear[2]);
let leapYear = function (x) {
  let lengthOfX = x.length;
  for (let i = 0; i < lengthOfX; i++) {
    if (x[i] % 4 === 0) {
      if (x[i] % 100 === 0) {
        if (x[i] % 400 === 0) {
          console.log(`${x[i]} is not a leap year`);
        } else {
          console.log(`${x[i]} is not a leap year`);
        }
      } else {
        console.log(`${x[i]} is a leap year`);
      }
    } else {
      console.log(`${x[i]} is not a leap year`);
    }
  }
};

leapYear(findLeapYear);
