//word

let index = 0;
function addChar(word: string): string {
  let arr: string[]=[];
  if (word.charAt(word.length - 2) === '*') {
    return word
  } else {
    arr = word.split('');
    arr[index] = arr[index] + '*';
    word = arr.join('');
    index += 2;
    return addChar(word);
  }
}
console.log(addChar('word'));