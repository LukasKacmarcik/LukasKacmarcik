import fs from 'fs';

function readFile1(filePath: string,): string {
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (error: any) {
    console.error("Unable to read file: my-file.txt");
  }
  return content;
}
console.log(readFile1('./asset/my-fileee.txt'));