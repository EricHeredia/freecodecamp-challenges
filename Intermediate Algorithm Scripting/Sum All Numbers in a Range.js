function sumAll(arr) {
  let newArr = arr.slice().sort((a, b) => {return a - b});
  let total = 0;
  for (let i = newArr[0]; i <= newArr[1]; i++) {
    total += i;
  }
  return total;
}

sumAll([1, 4]);

----------------------------------------------------------------

function sumAll(arr) {
  let total = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    total += i;
  }
  return total;
}

sumAll([1, 4]);