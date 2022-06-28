function flopingEars(bunniesCount: number) {
  if ( bunniesCount < 0) {
    return console.log('Are u MAD bra');    
  } else {
    bunniesCount = bunniesCount + bunniesCount;
    return bunniesCount;
  }
}
console.log(flopingEars(15));
