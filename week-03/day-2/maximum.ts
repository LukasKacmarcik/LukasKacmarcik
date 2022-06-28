

let testArr = [1, 0, 15, 20, 14, 25, 6, 9,36];

function maximum(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  const first = numbers[0];
  const rest = numbers.slice(1);

  const remainingMax = maximum(rest);

  if (first > remainingMax) {
    return first;
  } else {
    return remainingMax;
  }
}
console.log(maximum(testArr));