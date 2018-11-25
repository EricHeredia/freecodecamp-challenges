function getFinalOpenedDoors (numDoors) {
  let doors = []
  let openDoors = []

  for (let i = 0; i < numDoors; i++) {
    doors.push("closed");
  }

  const toggle = (i) => {
    if (doors[i] === "closed") {
      doors[i] = "open";
    } else {
      doors[i] = "closed";
    }
  }

  let counter = 0;
  while (counter < 100) {
    for (let i = counter; i < doors.length; i += counter + 1) {
      toggle(i);
    }
    counter++;
  }



  console.log(doors.map((x, i) => x === "open" ? i+1:x).filter(x => typeof x === "number"));
  return doors.map((x, i) => x === "open" ? i+1:x).filter(x => typeof x === "number");
}

getFinalOpenedDoors(100);