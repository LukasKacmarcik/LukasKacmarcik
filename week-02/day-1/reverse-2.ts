let numbers = [3, 4, 5, 6, 7];

console.log(numbers.reverse());
let temp: number [] = [];
for (let i = numbers.length -1; i >= 0; i--) {
  temp.unshift(numbers[i]);
}
console.log(temp);
