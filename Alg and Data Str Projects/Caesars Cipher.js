function rot13(str) { // LBH QVQ VG!
  return str.split('')
    .map(x => {
      if (x.match(/\W/)) {
        return x;
      } else if (x.charCodeAt(0) < 78) {
          return String.fromCharCode(x.charCodeAt(0) + 13);
      } else {
        return String.fromCharCode(x.charCodeAt(0) - 13)
      }
    })
    .join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

//-----------------------------------------------------------

function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, x => String.fromCharCode(65 + (x.charCodeAt(0) % 26)));
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");