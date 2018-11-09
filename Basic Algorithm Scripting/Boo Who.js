function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (typeof bool === 'boolean') ? true: false;
}

-------------------------------------------------------------------

booWho(null);

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (bool === true || bool === false) ? true: false;
}

booWho(null);

-------------------------------------------------------------------

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  switch (bool) {
    case true:
    case false:
      return true;
    default:
      return false;
  }
}

booWho(null);

--------------------------------------------------------------------

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

booWho(null);