function repeatStringNumTimes(str, num) {
  // repeat after me
  let result = '';
  for (let n = 0; n < num; n++) {
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);

---------------------------------------------

function repeatStringNumTimes(str, num) {
  // repeat after me
  let result = '';
  while (num > 0) {
    result += str;
    num--;
  }
  return result;
}

repeatStringNumTimes("abc", 3);