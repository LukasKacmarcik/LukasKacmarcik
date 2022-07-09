let expenses = [500, 1000, 1250, 175, 800, 120];

let sum: number = 0;
expenses.forEach(function(num: number) {
  sum += num;
})
console.log(sum);
let greatest = expenses.reduce((previousValue, currentValue) => {
  if (previousValue < currentValue) {
    previousValue = currentValue
  }
  return previousValue;
});
console.log(greatest);

let cheapest = expenses.reduce((preV, currV) => {
  if(preV > currV) {
    preV = currV;
  }
  return preV;
})
console.log(cheapest);

console.log(Math.round(sum / expenses.length *10000) / 10000);