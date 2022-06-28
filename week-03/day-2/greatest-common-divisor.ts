//greatest-common-divisor

function greatestCommonDivisor(i: number, j:number): number {
  //set absolute values for negative imputs
  let q = 0;
  let r = 0;
  let temp = 0;
 
  i = Math.abs(i);
  j = Math.abs(j);
  //i need to be < j soo verifieng if it si if not than values are replaced
  if (i > j) {
    temp = i;
    i = j;
    j = temp;
  };
  //GCD formula j = i * q + r; than shift i ==> j and r ==> i
  q = Math.floor(j / i);
  r = j % i;
  //Base case
  if ( r === 0) {
    return i;
  }
  let newI = r;
  let newJ = i;
  return greatestCommonDivisor(newI, newJ);
}
console.log(greatestCommonDivisor(10,45));