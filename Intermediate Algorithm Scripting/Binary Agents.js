function binaryAgent(str) {
  return str.split(' ').map(x => String.fromCharCode(parseInt(x,2))).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//----------------------------------------------------------------------------

function binaryAgent(str) {
  let newStr = str.slice().split(' ');
  
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = String.fromCharCode(parseInt(newStr[i],2));
  }

  newStr = newStr.join('');

  console.log(newStr);
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");