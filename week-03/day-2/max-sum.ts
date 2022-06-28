let index = 0;
let sum = 0;
let testArray = [2, 5, 4, 8, 9];
function maxSum(arr: number[]): number {
  sum = sum + arr[index];
  if (index > arr.length -2) {
    return sum - Math.min(... arr);
  }
  index = index +1;
  return maxSum(arr)
}
console.log(maxSum(testArray));
