//greatest-common-divisor
 let q = 0;
 let r = 0;
 let lastR = 0;
 let temp = 0;
function greatestCommonDivisor(i: number, j:number): number {
  i = Math.abs(i);
  j = Math.abs(j);
  if (i > j) {
    temp = i;
    i = j;
    j = temp;
  };
  q = Math.floor(j / i);
  r = j % i;
  if ( r === 0) {
    return i;
  }
  //j = i * q + r;
  let newI = r;
  let newJ = i;
  lastR = i;
  return greatestCommonDivisor(newI, newJ);
}
console.log(greatestCommonDivisor(-45,-10));

