function myReplace(str, before, after) {
  let newStr = str.slice();
  let firstInd = newStr.indexOf(before);

  if (newStr[firstInd] === newStr[firstInd].toUpperCase()) {
    return newStr.replace(before, after[0].toUpperCase().concat(after.substring(1)));
  } else {
    return newStr.replace(before, after);
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//-----------------------------------------------------------------------------------

function myReplace(str, before, after) {
  let i = str.indexOf(before);

  if (str[i] === str[i].toUpperCase()) {
    return str.replace(before, after[0].toUpperCase().concat(after.substring(1)));
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//-----------------------------------------------------------------------------------

function myReplace(str, before, after) {
  if (str[str.indexOf(before)] === str[str.indexOf(before)].toUpperCase()) {
    return str.replace(before, after[0].toUpperCase().concat(after.substring(1)));
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");