let string = 'blaa69traAezAzzzzs';

export function countLetters(string:string) {
  let sortedString = string.split('').sort().join('');
  let objecto: Record<string, number> = {};
  let counter = 1;
  let originalStrLenght = string.length;
  for ( let i = 0; i < originalStrLenght; i++) {
    if (sortedString.charAt(0) === sortedString.charAt(1)) {
      counter++;
      sortedString = sortedString.slice(1);
      //console.log(sortedString);
    } else {
      Object.assign(objecto,{[sortedString.charAt(0)]: counter});
      counter = 1;
      sortedString = sortedString.slice(1); 
      //console.log(sortedString);
      
    }
  }
  return objecto;
}
//console.log(countLetters(string));