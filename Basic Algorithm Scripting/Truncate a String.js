function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    str = str.slice(0, num);
    str += '...';
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

--------------------------------------------------------------------

function truncateString(str, num) {
  // Clear out that junk in your trunk
  let newStr = '';
  if (str.length > num) {
    newStr = str.slice(0, num);
    newStr += '...';
  } else {
    newStr = str;
  }
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);