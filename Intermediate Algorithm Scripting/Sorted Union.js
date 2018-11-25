// Works with multiples of nested numbers
function uniteUnique(arr) {
  let newArr =  [];
  let nestNum = [];

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (newArr.indexOf(arguments[i][j]) === -1 && nestNum.indexOf(arguments[i][j]) === -1) {
        if (typeof arguments[i][j] === 'object') {
          for (let o = 0; o < arguments[i][j].length; o++) {
            if (newArr.indexOf(arguments[i][j][o]) === -1 && nestNum.indexOf(arguments[i][j][o]) === -1) {
              newArr.push([arguments[i][j][o]]);
              nestNum.push(arguments[i][j][o])
            }
          }
        } else {
        newArr.push(arguments[i][j]);
        }
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]])

//--------------------------------------------------------------------------------------

// Does not work with multiples of nested numbers
function uniteUnique(arr) {
  let newArr =  []

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (newArr.indexOf(arguments[i][j]) === -1) {
        newArr.push(arguments[i][j]);
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);