function palindrome(str) {
  // Good luck!

  let cleanStr = str.toLowerCase().replace(/[\W_]/g, ' ').split(' ').join('');
  let revStr = cleanStr.split('').reverse().join('');

  return cleanStr === revStr ? true:false
}

palindrome("eye");

//---------------------------------------------------------------------

function palindrome(str) {
  // Good luck!

  return str.toLowerCase().replace(/[\W_]/g, '') ===
         str.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
}

palindrome("eye");

//---------------------------------------------------------------------

// Works infinitely faster on very large strings compared to previous solutions
function palindrome(str) {
  // Good luck!
  let front = 0;
  let back = str.length - 1;
  
  while (back > front) {
    if (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    if (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }
    if (str[front].toLowerCase() !== str[back].toLowerCase()) {
      return false;
    }
    front++;
    back--;
  }
  return true;
}

palindrome("eye");