export function fibonacciN(n: number): number {
  if (n <= 1){
    return n;
  }else{
    return fibonacciN(n-2) + fibonacciN(n-1);
  }
}