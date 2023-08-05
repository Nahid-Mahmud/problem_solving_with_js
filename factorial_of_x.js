"use strict";

// for loop with increment

function factorial(x) {
  let fact = 1;
  if (x === 0) {
    return (fact = 1);
  } else {
    for (let i = 1; i <= x; i++) {
      fact = fact * i;
    }
    return fact;
  }
}

// while loop with decrement
function factorialWithWhile(y) {
  let fact = 1;
  if (y === 0) {
    return (fact = 1);
  } else {
    let j = y;
    while (j > 0) {
      fact = fact * j;
      j--;
    }
    return fact;
  }
}
console.log(factorial(0), factorialWithWhile(0));
