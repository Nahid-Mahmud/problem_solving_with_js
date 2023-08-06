"use strict";
function clg(x) {
  console.log(x);
}

const sentense = "I'm going to be a Good Devloper";

function reverseSentense(string) {
  let reverseSentense = "";
  for (let i = string.length-1; i >= 0; i--) {
    reverseSentense = reverseSentense + string[i];
  }
  return reverseSentense;
}

clg(reverseSentense(sentense));
