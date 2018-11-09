function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let finalArr = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    finalArr.splice(n, 0, arr1[i]);
    n++
  }
  return finalArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);