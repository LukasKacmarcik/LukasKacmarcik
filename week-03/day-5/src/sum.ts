// numbers.forEach((value) => { sum = sum + value});
// console.log(sum);

export class Sum {
  arrTotest: number [] = [];

  public getSum(arrTotest:number[]) {
    let sum = 0;
    arrTotest.forEach((value) => { sum = sum + value});
    return sum;
  }
}