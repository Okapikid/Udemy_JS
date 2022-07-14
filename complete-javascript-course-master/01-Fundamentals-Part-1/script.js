const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, so the tip would be ${tip}, making the total ${bill + tip}.`)