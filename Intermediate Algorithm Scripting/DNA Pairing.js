function pairElement(str) {
  let newStr = []
  str.slice().split('').forEach(dna => {
    switch(dna) {
      case 'A':
        newStr.push(["A","T"]);
        break;
      case 'C':
        newStr.push(["C", "G"]);
        break;
      case 'G':
        newStr.push(["G", "C"]);
        break;
      case 'T':
        newStr.push(["T", "A"]);
        break;
    }
  });
  return newStr;
}

pairElement("GCG");

//-----------------------------------------------------

function pairElement(str) {
  let pairs = {
    'A':'T',
    'T':'A',
    'C':'G',
    'G':'C'
  };
  return str.split('').map(x => [x,pairs[x]]);
}

pairElement("GCG");

//-----------------------------------------------------

function pairElement(str) {
  let pairs = {'A':'T', 'T':'A', 'C':'G', 'G':'C'};
  return str.split('').map(x => [x,pairs[x]]);
}

pairElement("GCG");