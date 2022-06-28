
function addChar(word: string): string {
  if (word.length < 1) {
    return '';
  }
  if(word.length > 1) {
  return word.charAt(0) + '*' + addChar(word.slice(1));
  }else {
    return word.charAt(0) + addChar(word.slice(1));
  }
}

console.log(addChar('word'));