// let outcome = 0;
// let start = [0, 1];
// function fibonacciN(n: number): number {
//   if (n < 0) {
//     n = n * -1;
//   }
//   if (start.length === n) {
//     outcome = start[start.length -1];
//     return outcome;
//   } else {
//     let sum = start[start.length - 2] + start[start.length - 1];
//     start.push(sum);
//     return fibonacciN(n);
//   }
// }
// console.log(fibonacciN(-9));

function fibonacciN(n: number): number {
  if (n < 2){
    return 1;
  }else{
    return fibonacciN(n-2) + fibonacciN(n-1);
  }
}
console.log(fibonacciN(7));
