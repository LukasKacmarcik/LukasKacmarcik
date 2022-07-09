//matchmaking.ts

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

export function match(arr1: string[], arr2: string[]) {
  let together: string[] = [];
  let container: string = '';
  for (let i = 0; i < girls.length; i++) {
    container = arr1[i] + '-' + arr2[i];
    together.push(container);
  }
  var newArr: string[] = [];
  if (arr1.length > arr2.length) {
    let diff = arr1.length - arr2.length;
    newArr = arr1.slice(-diff);
  }
  if (arr1.length < arr2.length) {
    let diff = arr2.length - arr1.length;
    newArr = arr2.slice(-diff);
  }
  for (let i = 0; i < newArr.length; i++) {
    together.push(newArr[i]);
  }
  return together;
}
console.log(match(girls, boys));