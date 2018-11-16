function destroyer(arr) {
  // Remove all the values
  let seek = Array.prototype.slice.call(arguments, 1);
  let destroy = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seek.includes(arr[i])) {
      destroy = destroy.concat([arr[i]]);
    }
  }
  return destroy;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//--------------------------------------------------------------------------------------------------

function destroyer(arr) {
  // Remove all the values
  const seek = Array.prototype.slice.call(arguments, 1);
  const destroy = arr.filter(item => seek.indexOf(item) === -1);
  return destroy;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//--------------------------------------------------------------------------------------------------

function destroyer(arr) {
  // Remove all the values
  const destroy = arr.filter(item => Array.prototype.slice.call(arguments, 1).indexOf(item) === -1);
  return destroy;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//--------------------------------------------------------------------------------------------------

function destroyer(arr) {
  // Remove all the values
  const destroy = arr.filter(item => !Array.prototype.slice.call(arguments, 1).includes(item));
  return destroy;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//--------------------------------------------------------------------------------------------------

// Remove all the values
const destroyer = (arr, ...args) => arr.filter(item => !args.includes(item));

destroyer([1, 2, 3, 1, 2, 3], 2, 3);