let numbers = [1, 11, 34, 52, 61];

function findMatchingIndexes(numToFind: number, arrFrom: number[]) {
  let arrToReturn:number[] = [];
  for (let index = 0; index < arrFrom.length; index++ ) {
    if (arrFrom[index].toString().includes(numToFind.toString())) {
      arrToReturn.push(index);
    }
  }
  return arrToReturn;
}
console.log(findMatchingIndexes(1,numbers));
console.log(findMatchingIndexes(9,numbers));
