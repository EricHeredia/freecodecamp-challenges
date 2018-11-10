function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let group = 0;
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (counter === 0) {
      newArr[group] = [arr[i]];
      counter++;
    } else {
      if (counter === size - 1) {
        newArr[group].push(arr[i]);
        group++;
        counter = 0;
      } else {
        newArr[group].push(arr[i]);
        counter++;
      }
    }
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);