let names = ["Arthur", "Boe", "Chloe"];

let temp = names[0];

// names.splice(2,1,'Arthur');
// names.splice(0,1,temp);

// console.log(names);

names[0] = names[2];
names[2] = temp

console.log(names);