// Create an empty list which will contain names (strings)
// Print out the number of elements in the list
// Add "William" to the list
// Print out whether the list is empty or not
// Add "John" to the list
// Add "Amanda" to the list
// Print out the number of elements in the list
// Print out the 3rd element
let names: string[] = [];
console.log(names.length);
names.push('William');
let empty;
if(names.length < 1) {
  empty = true;
} else {
  empty = false;
}
console.log(empty);
names.push('John');
names.push('Amanda');
console.log(names.length);
console.log(names[2]);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
for(let i = 0; i < names.length; i++) {
  console.log(`${i + 1} ${names[i]}`);
}
names.splice(1,1);
for(let i = names.length -1; i >= 0; i--) {
  console.log(names[i]);
}
names = [];
console.log(names.length);
