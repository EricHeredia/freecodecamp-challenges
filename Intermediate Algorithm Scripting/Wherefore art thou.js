function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  for (var i in collection) {
    let shouldPush = 0;
    for (var j in keys) {
      if (collection[i].hasOwnProperty(keys[j]) && collection[i][keys[j]] === source[keys[j]]) {
        shouldPush++;
      } else {
        shouldPush--;
      }
    }
    if (shouldPush === keys.length) {
        arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//----------------------------------------------------------------------------------

function whatIsInAName(collection, source) {
  // What's in a name?
  var srcKeys = Object.keys(source);
  // Only change code below this line
  return collection.filter(function(obj) {
    for (let i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
  
  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//-----------------------------------------------------------------------------------

function whatIsInAName(collection, source) {
  // What's in a name?
  // Only change code below this line
  var srcKeys = Object.keys(source);
  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty([key]) && obj[key] === source[key];
    });
  });
  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });