
function power(base:number, n:number): number {
  if (n < 1) {
    return 1;
  }
  return base * power(base, n-1);
}
console.log(power(5,2));
