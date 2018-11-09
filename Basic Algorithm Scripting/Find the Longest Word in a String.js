function findLongestWordLength(str) {
  str = str.split(' ');
  let largest = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > largest) {
      largest = str[i].length;
    }
  }
  return largest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");