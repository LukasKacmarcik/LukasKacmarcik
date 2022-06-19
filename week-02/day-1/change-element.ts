//change-element.ts

let numbers = [1, 2, 3, 8, 5, 6];
let newNumbers = numbers.map(function(value) {
    if(value === 8) {
        return value = 4;
    }else {
        return value;
    }
});
 
console.log(newNumbers);
