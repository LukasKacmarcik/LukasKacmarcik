export function sum(num: number): number {
  if (num <= 0) {
    return 0;
  }
  return num + sum(num -1);
}