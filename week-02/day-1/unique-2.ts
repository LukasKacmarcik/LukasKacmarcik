let numbers = [1, 11, 34, 11, 52, 61, 1, 34];

export function findUniqueItems(numArr: number[]) {
  let tempArr = new Set(numArr);
  let array: number[] = [];
  array.push(...tempArr)
  return array;
}