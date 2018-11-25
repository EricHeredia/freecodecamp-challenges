function truthCheck(collection, pre) {
  // Is everyone being true?

  for (let i = 0; i < collection.length; i++) {
    if (!!collection[i][pre]) {
      continue;
    } else {
      return false;
    }   
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//-----------------------------------------------------------------------

function truthCheck(collection, pre) {
  // Is everyone being true?

  for (let i = 0; i < collection.length; i++) {
    if (!!collection[i][pre] === false) {
      return false;
    }  
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//-----------------------------------------------------------------------

function truthCheck(collection, pre) {
  // Is everyone being true?

  for (let obj in collection) {
    if (!!collection[obj][pre] === false) {
      return false;
    }  
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//-----------------------------------------------------------------------

function truthCheck(collection, pre) {
  // Is everyone being true?

  for (let obj in collection) {
    if (!!!collection[obj][pre]) {
      return false;
    }  
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//-----------------------------------------------------------------------

function truthCheck(collection, pre) {
  // Is everyone being true?

  return collection.every((x, i) => !!collection[i][pre]);

}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//-----------------------------------------------------------------------

function truthCheck(collection, pre) {
  // Is everyone being true?

  return collection.every(x => x[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");