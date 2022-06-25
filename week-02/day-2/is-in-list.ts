let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

const lookingFor = [4, 8, 12 ,16];
let counter = 0;
function checkNums(arr: number[]) {
  for (let i = 0; i < lookingFor.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (lookingFor[i] === arr[j]) {
        counter = counter + 1;
      }
    }
  }
  if (counter === lookingFor.length) {
    return true;
  }else {
    return false;
  }
}
console.log(checkNums(listOfNumbers));