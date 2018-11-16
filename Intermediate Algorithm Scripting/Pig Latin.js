function translatePigLatin(str) {
  if ('aeiou'.includes(str[0])) {
    return str.concat('way');
  } else if (!/[aeiou]/g.test(str)) {
    return str.concat('ay');
  } else {
    return str.replace(/(^[^aeiou]+)(.+$)/, '$2$1ay');
  }
}

translatePigLatin("consonant");