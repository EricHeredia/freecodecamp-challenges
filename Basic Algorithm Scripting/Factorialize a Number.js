function factorialize(num) {
  let result = 1;
  for (let n = 1; n < num; n++) {
    result *= n + 1;
  }
  return result;
}

factorialize(5);

-----------------------------------------

function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    console.log(num);
    return num * factorialize(num - 1);
  }
  return num;
}

factorialize(5);