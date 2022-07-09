let myDatabase: Record <string, number> = {
  'Eggs': 200,
  'Milk': 200,
  'Fish': 400,
  'Apples': 150,
  'Bread': 50,
  'Chicken': 550,
}

console.log(myDatabase['Fish']);
//
let sum = 0;
let container = 0;
let countBelow300 = 0;
let cheapest = Object.values(myDatabase)[0];
for (let i = 0; i < Object.keys(myDatabase).length; i++) {
  sum = sum + Object.values(myDatabase)[i];  
  if (Object.values(myDatabase)[i] > container) {
    container = Object.values(myDatabase)[i];
  }
  if (Object.values(myDatabase)[i] < 300) {
    countBelow300++;
  }
  if (cheapest > Object.values(myDatabase)[i]) {
    cheapest = Object.values(myDatabase)[i];
  }
}
export function getKeyByValue(object: any, value: number) {
  return Object.keys(object).find(key => object[key] === value);
}

console.log(getKeyByValue(myDatabase, container));
//
let average = sum / Object.keys(myDatabase).length;
average = Math.ceil(average * 100000)/ 100000;
console.log(average);
//
console.log(countBelow300);
//
if (getKeyByValue(myDatabase, 125) === undefined) {
  console.log('no');
}
//
console.log(getKeyByValue(myDatabase, cheapest));










