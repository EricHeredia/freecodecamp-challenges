function sumPrimes(num) {
  let primeNums = [2];

  for (var i = 3; i <= num; i++) {
    let addNum = false;
    for (let j = 0; j < primeNums.length; j++) {
      if ((i / primeNums[j]) % 1 !== 0) {
        addNum = true;
      } else {
        addNum = false;
        break;
      }
    }
    if (addNum === true) {
        primeNums.push(i);
    }
  }
  return primeNums.reduce((x, y) => x + y);
}

sumPrimes(10);