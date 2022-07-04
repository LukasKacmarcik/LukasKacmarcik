function calculateFactorial(num: number): number {
  if (num <= 1) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}

console.log(calculateFactorial(6));