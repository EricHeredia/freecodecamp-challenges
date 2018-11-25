function convertHTML(str) {
  // &colon;&rpar;

  return str.slice()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

}

convertHTML("Dolce & Gabbana");

//---------------------------------------------------------

function convertHTML(str) {
  // &colon;&rpar;

  let newStr = str.split('');

  for (let i in newStr) {
    switch(newStr[i]) {
      case '&':
        newStr[i] = '&amp;';
        break;
      case '<':
        newStr[i] = '&lt;';
        break;
      case '>':
        newStr[i] = '&gt;';
        break;
      case '"':
        newStr[i] = '&quot;';
        break;
      case "'":
        newStr[i] = '&apos;';
        break;
    }
  }
  return newStr.join('');
}

convertHTML("Dolce & Gabbana");

//---------------------------------------------------------

function convertHTML(str) {
  // &colon;&rpar;

  let htmlEnt = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&apos;'
  };
  
  return str.split('').map(i => htmlEnt[i] || i).join('');
}

convertHTML("Dolce & Gabbana");