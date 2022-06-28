
function flopingEars(bunniesCount: number): number {
  if (bunniesCount <= 0) {
    return 0;
  }
  return bunniesCount + flopingEars(bunniesCount / 2);
}
console.log(flopingEars(15));