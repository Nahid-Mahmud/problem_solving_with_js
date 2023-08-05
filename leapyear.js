"use strict";

let leapYear = function (x) {
  if (x % 4 === 0) {
    if (x % 100 === 0) {
      if (x % 400 === 0) {
        return `${x} is a leap year`;
      } else {
        return `${x} is not a leap year`;
      }
    } else {
      return `${x} is a leap year`;
    }
  } else {
    return `${x} is not a leap year`;
  }
};
console.log(leapYear(2024));
