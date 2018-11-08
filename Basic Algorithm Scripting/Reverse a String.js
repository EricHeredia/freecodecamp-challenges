function reverseString(str) {
  let newStr = '';
  for (let i = str.length - 1; i > -1; i--) {
    newStr += str[i];
  }
  str = newStr;
  return str;
}

reverseString("hello");

-----------------------------------------------

function reverseString(str) {
  str = str.split('');
  str = str.reverse();
  str = str.join('');
  return str;
}
reverseString("hello");

-------------------------------------------------

function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString("hello");