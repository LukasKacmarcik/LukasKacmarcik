//reverse.ts

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(wannabeReverseString: string) {

    let charArr = wannabeReverseString.split('');

    charArr = charArr.reverse();

    wannabeReverseString = charArr.join('')

    return wannabeReverseString;
}

console.log(reverse(toBeReversed));