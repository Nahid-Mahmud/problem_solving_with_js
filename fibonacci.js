"use strict";

// serise  1,1,3,5,8,13,21,.........

function fibonacci(x) {
  let saveSeries = [0, 1];
  for (let i = 2; i <= x; i++) {
    saveSeries[i] = saveSeries[i - 1] + saveSeries[i - 2];
  }
  return saveSeries;
}
console.log(fibonacci(20));
