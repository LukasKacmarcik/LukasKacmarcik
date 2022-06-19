//double-items.ts

let drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];
drinks = drinks.map(function(value) {
    return value + value;
});
console.log(drinks);
