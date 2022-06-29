//divide-by-zero.ts

function throwCustomErr(message: string) {
  throw new Error(message);
}

function divideBy10(n: number): number {
  if (n === 0) {
    throwCustomErr('fail');
  }
  return 10/n;
}

try {
  console.log(divideBy10(0));
} catch (error: any) {
  if (error) {
    console.error(error.message);
  }
}
