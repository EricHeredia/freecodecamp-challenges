function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = [];

  for (let item in arr) {
    let avgAlt = arr[item].avgAlt;
    let totalDist = avgAlt + earthRadius;
    let cubed = totalDist * totalDist * totalDist;
    let final = Math.round(Math.sqrt(eval(cubed/GM)) * 2 * Math.PI);
  
    newArr.push({name:arr[item].name, orbitalPeriod:final});
  }
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//---------------------------------------------------------------

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = [];

  for (let item in arr) {
    let final = Math.round(Math.sqrt(eval(Math.pow(arr[item].avgAlt + earthRadius, 3) / GM)) * 2 * Math.PI);
  
    newArr.push({name:arr[item].name, orbitalPeriod:final});
  }
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//---------------------------------------------------------------

// This replaces the prop instead of returning new array
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = [];

  for (let item in arr) {
    let final = Math.round(Math.sqrt(eval(Math.pow(arr[item].avgAlt + earthRadius, 3) / GM)) * 2 * Math.PI);
  
    delete arr[item].avgAlt;
    arr[item].orbitalPeriod = final;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);