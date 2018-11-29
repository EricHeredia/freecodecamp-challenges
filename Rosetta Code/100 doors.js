function getFinalOpenedDoors (numDoors) {
  let doors = []
  for (let i = 0; i < numDoors; i++) {
    doors.push("closed");
  }

  const toggle = (i) => doors[i] === "closed" ? doors[i] = "open" : doors[i] = "closed";

  let counter = 0;
  while (counter < 100) {
    for (let i = counter; i < doors.length; i += counter + 1) {
      toggle(i);
    }
    counter++;
  }

  return doors.map((x, i) => x === "open" ? i+1:x).filter(x => typeof x === "number");
}

getFinalOpenedDoors(100);