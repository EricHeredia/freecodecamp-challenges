function filteredArray(arr, elem) {
  let newArr = [...arr];
  // change code below this line
  for (let i = arr.length - 1; i > -1; i--) {
    for (let j = arr[i].length - 1; j > -1; j--) {
      if (arr[i][j] === elem) {
        newArr.splice(i, 1);
        break;
      }
    }
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));