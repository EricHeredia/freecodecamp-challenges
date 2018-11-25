function sumFibs(num) {
  var sum = 1;
  const getFibs = (firstNum, nextNum, num) => {
    if (nextNum % 2 !== 0) {
      sum += nextNum;
    }
    if (firstNum + nextNum <= num) {
      getFibs(nextNum, (firstNum + nextNum), num);
    }
    return sum;
  };
  getFibs(1,1,num);
  return sum;
}

sumFibs(10);