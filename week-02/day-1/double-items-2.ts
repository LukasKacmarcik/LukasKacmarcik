let items = ['Gin', 'Whiskey', 'Wine', 'Beer'];

items.forEach(element => console.log(element + element));
let copyChanged = items.map(element => element + element);
console.log(copyChanged);
