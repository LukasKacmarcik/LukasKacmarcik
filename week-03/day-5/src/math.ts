export function addNum(a: number, b: number): number {
  return a + b;
}

export function divide(a: number, b:number): number {
  if (b === 0) {
    throw new Error('Unable to divide by 0');
  }

  return a / b;
}

export function isPrime(num: number): boolean {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}