function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

-----------------------------------------------------

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  for (let i = 0; i < arr.length; i++) {
    console.log(Boolean(arr[i]));
    if (Boolean(arr[i]) === false) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

bouncer([7, "ate", "", false, 9]);

------------------------------------------------------

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  for (let i = 0; i < arr.length; i++) {
    console.log(Boolean(arr[i]));
    if (Boolean(arr[i]) !== true) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

bouncer([7, "ate", "", false, 9]);