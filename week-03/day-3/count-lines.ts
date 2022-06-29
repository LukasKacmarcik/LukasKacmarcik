import fs from 'fs';
// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.


function countLines(filePath: string): number {
  let content = fs.readFileSync(filePath, 'utf-8');
  let arr: string[] = content.split('\n');
  return arr.length;
}

try {
  console.log(countLines('./asset/my-fileee.txt'));
}catch (error:any) {
  console.error(0);
}
