//sumdigit.ts
//126
let sum = 0;
function sumDigit(n: number): number {
  if (n % 10 < 1) {
    return sum;
  } else {
    sum = sum + Math.floor(n) % 10;    
    return (sumDigit(Math.floor(n) / 10));
  }
}
console.log(sumDigit(12634));
