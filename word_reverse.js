"use strict";
const sentense = "I'm going to be a Good Devloper";
// shortcut for console.log
function clg(x) {
  console.log(x);
}
// Actual function
function reverseWord(string) {
  let stringSplit = string.split(" ");
  let stringLength = stringSplit.length;
  let finalsentenseReversed = "";
  for (let i = stringLength - 1; i >= 0; i--) {
    finalsentenseReversed = finalsentenseReversed + stringSplit[i] + " ";
  }
  return finalsentenseReversed;
}
clg(reverseWord(sentense));
