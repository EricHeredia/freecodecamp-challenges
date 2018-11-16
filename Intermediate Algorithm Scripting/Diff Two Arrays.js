function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  arr1.forEach(item => {
    if (arr2.includes(item) === false) {
      newArr.push(item);
    }
  });

  arr2.forEach(item => {
    if (arr1.includes(item) === false) {
      newArr.push(item);
    }
  })

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

-----------------------------------------------------------------------------------------

function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

-----------------------------------------------------------------------------------------

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);