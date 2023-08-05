"use strict";
// Function that converts miles to km 
function milesToKm(miles) {
  let convertedValue = (miles * 1.6).toFixed(3); //Mathematical operation : 1 Miles = 1.6 km
  return convertedValue;
}
console.log(milesToKm(3)); // calling the function and also get output in console 
