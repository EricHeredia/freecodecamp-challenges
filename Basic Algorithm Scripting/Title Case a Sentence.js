function titleCase(str) {
  let strArr = str.toLowerCase().split(' ');
  let newStr = '';
  
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (j === 0) {
        newStr += strArr[i][j].toUpperCase();
      } else {
        newStr += strArr[i][j];
      }
    }
    if (i === strArr.length - 1) {
      break;
    } else {
    newStr += ' ';
    }
  }
  return newStr;
}

titleCase("I'm a little tea pot");