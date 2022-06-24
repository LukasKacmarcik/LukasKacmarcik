//product-database-2

let myDatabase: Record<string, number> = {
  'Eggs': 200,
  'Milk': 200,
  'Fish': 400,
  'Apples': 150,
  'Bread': 50,
  'Chicken': 550,
}
// let costLessThan201 = 0;
// let costMoreThan150 = 0;

for (let i = 0; i < Object.keys(myDatabase).length; i++) {
  if (Object.values(myDatabase)[i] < 201) {
    console.log(Object.keys(myDatabase)[i]);
  }
}
for (let i = 0; i < Object.keys(myDatabase).length; i++) {
  if (Object.values(myDatabase)[i] > 150) {
    console.log(Object.keys(myDatabase)[i] + ' ' + Object.values(myDatabase)[i]);
  }
}




















