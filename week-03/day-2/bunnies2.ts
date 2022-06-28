let counter = 0;
function bunnieEars(bunniesCount: number): number {
  if ( bunniesCount < 1) {
    return counter;
  } else if (bunniesCount % 2 === 0) {
    counter += 3;
    return bunnieEars(bunniesCount - 1);
  } else {
    counter += 2;
    return bunnieEars(bunniesCount - 1);
  }
}
console.log(bunnieEars(5));