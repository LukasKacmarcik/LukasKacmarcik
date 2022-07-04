let numbers = [34, 12, 24, 9, 5];

function bublle(arr: number[],descet: boolean) {
  if (descet === true) {
    return arr.sort((a, b) => b - a);
  } else {
    return arr.sort((a, b) => a - b);
  }
}

console.log(bublle(numbers,false));
console.log(bublle(numbers,true));
