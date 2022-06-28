let testArr = [1, 0, 15, 20, 14, 25, 6, 9,36];

let count = 0;
let max: number = 0;
function findMax(arr: number[]): any {
  if (count === arr.length) {
    return max;
  }
  else {
    if (arr[count] > max) {
      max = arr[count];
    }
    count = count +1;
    return findMax(arr);
  }
}
console.log(findMax(testArr));
