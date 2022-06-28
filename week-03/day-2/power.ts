// power.ts

let outcome = 1;
function power(base: number, n: number): number {
  if (n < 1) {
    return outcome;
  } else {
    outcome = outcome * base;
    return power(base,n-1);
  }
}
console.log(power(5,2));