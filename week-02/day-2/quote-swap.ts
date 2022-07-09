//quote-swap.ts

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
// Expected output: "What I cannot create I do not understand."
let fixedQuote: string = '';
let temporary = '';
export function swapQuote(arr: string[]) {
  temporary = arr[2];
  arr[2] = arr[5];
  arr[5] = temporary;
  fixedQuote = arr.join(' ');
  return fixedQuote;
}
console.log(swapQuote(words));