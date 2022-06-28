////xexonix

function replaceXwithY(word: string): string {
  let index = word.indexOf('x');
  if (index === -1) {
    return word;
  }else {
    return word = replaceXwithY(word.replace('x',''));
  }
}
console.log(replaceXwithY('xexonix'));