let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(stringToReverse: string): string {
  return stringToReverse.split('').reverse().join('');
}
console.log(reverse(toBeReversed));