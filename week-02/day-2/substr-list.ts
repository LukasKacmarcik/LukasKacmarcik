function substrlist(lookingForString: string, arrOfStrings: string[]) {
  let indexOf: number = -1;
  arrOfStrings.forEach(function(string:string, index: number) {
    if (string.includes(lookingForString)) {
      indexOf = index;
    }
 })
 return indexOf;
}
console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`