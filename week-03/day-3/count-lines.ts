import fs from 'fs';
// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.


export function countLines(filePath: string): number {
  // if(fs.existsSync(filePath) === false) {
  //   return  0;
  // }
  let content = fs.readFileSync(filePath, 'utf-8');
  
  let arr: string[] = content.split('\n');
  return arr.length;
}