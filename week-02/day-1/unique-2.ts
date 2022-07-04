let numbers = [1, 11, 34, 11, 52, 61, 1, 34];

function findUniqueItems(numArr: number[]) {
  let tempArr = new Set(numArr);
  console.log(tempArr);
}
findUniqueItems(numbers);