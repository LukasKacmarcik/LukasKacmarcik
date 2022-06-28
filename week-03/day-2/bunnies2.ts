
function bunnieEars(bunniesCount: number): number {
  if (bunniesCount <= 0) {
    return 0;
  }
  if (bunniesCount % 2 === 0) {
    var ears = 3;
  } else {
  var ears = 2;
  }
  return 1 * ears + bunnieEars(bunniesCount -1);
}
console.log(bunnieEars(5));