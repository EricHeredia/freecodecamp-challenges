function convertToRoman(num) {
  let conversion = '';

  let huns = {1:'C', 2:'CC', 3:'CCC', 4:'CD', 5:'D', 6:'DC', 7:'DCC', 8:'DCCC', 9:'CM'};
  let tens = {1:'X', 2:'XX', 3:'XXX', 4:'XL', 5:'L', 6:'LX', 7:'LXX', 8:'LXXX', 9:'XC'};
  let ones = {1:'I', 2:'II', 3:'III', 4:'IV', 5:'V', 6:'VI', 7:'VII', 8:'VIII', 9:'IX'};

  let newNum = num.toString().split('').map(Number);

  let j = 0;
  for (let i = newNum.length; i > 0; i--) {
      switch(i) {
          case 4:
            conversion += 'M'.repeat(newNum[j]);
            j++;
            break;
          case 3:
            if (newNum[j] === 0) {
              j++;
              break;
            } else {
              conversion += huns[newNum[j]];
              j++;
              break;
            }
          case 2:
            if (newNum[j] === 0) {
              j++;
              break;
            } else {
              conversion += tens[newNum[j]];
              j++;
              break;
            }
          case 1:
            if (newNum[j] === 0) {
              j++;
              return conversion;
            } else {
              conversion += ones[newNum[j]];
              j++;
              return conversion;
            }
      }
  }
}

convertToRoman(36);