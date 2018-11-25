function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArr = [];
  
  const findNest = function(arr) {
    for (let i in arr) {
      if (Array.isArray(arr[i])) {
        findNest(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
  }
  findNest(arr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

//---------------------------------------------------------------------

function steamrollArray(arr) {
  // I'm a steamroller, baby

  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);