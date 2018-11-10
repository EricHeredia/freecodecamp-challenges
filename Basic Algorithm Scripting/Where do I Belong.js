function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b){return a - b});
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
  return num;
}

getIndexToIns([40, 60], 50);

------------------------------------------------

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      count++;
    }
  }
  return count;
}
getIndexToIns([40, 60], 50);