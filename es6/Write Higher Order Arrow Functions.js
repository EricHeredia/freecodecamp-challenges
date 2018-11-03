const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter(i => Number.isInteger(i) && i > 0).map(i => i * i);
  // change code above this line
  return squaredIntegers;
};
console.log(2.2 % parseInt("2.2"));
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);