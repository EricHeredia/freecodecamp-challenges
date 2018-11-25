function dropElements(arr, func) {
  // Drop them elements.

  if (func(arr[0])) {
    return arr;
  } else if (arr.length === 1) {
    arr.shift();
    return arr;
  } else {
    arr.shift();
    dropElements(arr, func);
  }
  return arr;
}
dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
dropElements([1, 2, 3], function(n) {return n < 3; });

//--------------------------------------------------------------

function dropElements(arr, func) {
  // Drop them elements.

  if (func(arr[0])) {
    return arr;
  } else if (arr.length === 0) {
    return arr;
  } else {
    arr.shift()
    dropElements(arr, func);
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

//--------------------------------------------------------------

function dropElements(arr, func) {
  // Drop them elements.

  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });