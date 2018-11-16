// Finds all missing characters
function fearNotLetter(str) {
  let newStr = '';
  for (let i = str.charCodeAt(0); i < str.charCodeAt(str.length - 1) + 1; i++) {
    newStr += String.fromCharCode(i);
  }

  if (str.length !== newStr.length) {
    return newStr.split('').filter(x => str.indexOf(x) === -1).join('').toString();
  } else {
    return undefined;
  }
}

fearNotLetter("abce");

//----------------------------------------------------------------------

// Finds first missing character only
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

fearNotLetter("abce");