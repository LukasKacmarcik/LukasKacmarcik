const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

export function containsSeven(arr: number[]) {
  let outcome = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
      outcome = outcome + 1;
    }else (outcome = outcome);
  }
  if (outcome !== 0) {
    console.log('Hoorray')
  }else (console.log('Noooooo'))
}
containsSeven(numbers);
//Second method
var contain = (element: number) => element === 7;
function isSevenIn(arr: number[]) {
  if (arr.some(contain) === true) {
    console.log('Hoorray');
  }else (console.log('Noooooo'));
}
isSevenIn(numbers);