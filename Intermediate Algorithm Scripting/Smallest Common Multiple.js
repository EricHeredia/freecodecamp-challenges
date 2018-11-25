function smallestCommons(arr) {
  let sortArr = arr.slice().sort((a, b) => a - b);
  let numRange = [];
  let mainNum = sortArr[1];

  for (let i = sortArr[1] - 1; i >= sortArr[0]; i--) {
    numRange.push(i);
  }

  for (let j = 0; j < numRange.length; j++) {
    if ((mainNum / numRange[j]) % 1 !== 0) {
      mainNum += sortArr[1];
      j = -1;
    }
  }

return mainNum;
}

smallestCommons([1,5]);