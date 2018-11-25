function addTogether() {
  const checkNum = (x) => typeof x === 'number' ? true:false;

  if (arguments.length > 1) {
    let arg1 = arguments[0];
    let arg2 = arguments[1];
    if (checkNum(arg1) && checkNum(arg2)) {
      return arg1 + arg2;
    } else {
      return undefined;
    }
  } else {
    let arg1 = arguments[0];
    if (checkNum(arg1)) {
      return function(arg2) {
        if (checkNum(arg2)) {
          return arg1 + arg2;
        } else {
          return undefined;
        }
      }
    } else {
      return undefined;
    }
  }
}

addTogether(2,3);