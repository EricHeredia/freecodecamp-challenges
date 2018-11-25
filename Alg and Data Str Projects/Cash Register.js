function checkCashRegister(price, cash, cid) {
  var change = Math.abs(price - cash);
  change = Math.round(change * 100) / 100;
  // Here is your change, ma'am.

  let totalCid = 0;
  cid.reverse().forEach(x => totalCid += parseFloat(x[1]));
  let newCid = [];
  let j = 0;

  const denom = [
    {name: "HUNDRED", value: 100.00},
    {name: "TWENTY",  value:  20.00},
    {name: "TEN",     value:  10.00},
    {name: "FIVE",    value:   5.00},
    {name: "ONE",     value:   1.00},
    {name: "QUARTER", value:    .25},
    {name: "DIME",    value:    .10},
    {name: "NICKEL",  value:    .05},
    {name: "PENNY",   value:    .01}
  ];

  const pickChange = (change, cid) => {
    for (let i = 0; i < cid.length; i++) {
      newCid.push([cid[i][0], 0]);
      if (i === cid.length - 1) {
        let penny = cid[i][1] *= 100;
        while (penny > 0 && change >= denom[i].value) {
          penny -= denom[i].value * 100;
          change -= denom[i].value;
          change = Math.round(change * 100) / 100;
          newCid[i][1] += denom[i].value * 100;
        }
      } else {
        while (cid[i][1] > 0 && change >= denom[i].value) {
          cid[i][1] -= denom[i].value;
          change -= denom[i].value;
          change = Math.round(change * 100) / 100;
          newCid[i][1] += denom[i].value;
        }
      }
    }  

    newCid[newCid.length - 1][1] /= 100;
    cid[cid.length -1][1] /= 100;

    if (change !== 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (cid[cid.length - 1][1] === newCid[newCid.length - 1][1]) {
      return {status: "CLOSED", change: cid.reverse()};
    } else {
      return {status: "OPEN", change: newCid.filter(x => x[1] > 0)};
    }
  }

  totalCid = Math.round(totalCid * 100) / 100;
  change = Math.round(change * 100) / 100;
  if (totalCid < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else {
    return pickChange(change, cid);
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);