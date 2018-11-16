function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.split(/[\W_]|(?=[A-Z])/g).map(word => word.toLowerCase()).join('-');
}

spinalCase('This Is Spinal Tap');

//----------------------------------------------------------------------------

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.split(/[\W_]|(?=[A-Z])/g).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');