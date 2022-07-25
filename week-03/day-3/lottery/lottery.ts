let string = 'abeceda je bat de da';
let re = /a/g;
let newString = re[Symbol.replace](string, '');
console.log(newString);
 