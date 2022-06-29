import fs from 'fs';

function readFile(filePath: string): string {
  let fileContent = '';
  
  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch(error:any) {
    console.error(`Error happend during the file reading, with following message: ${error.message}`);
  }
  return fileContent;
}

export { readFile };

///////////////////////////////////WRITE FUNCTION//////////////////////////////////////////////////////////////////

function writeFile(filePath: string, contentToWrite: string): void {
  try {
    fs.writeFileSync(filePath, contentToWrite);
  } catch (error: any) {
    console.error(`Error happend during the file writing: ${error.message}`)
  }
}

export { writeFile };

//////////////////////////////////COUNT LINES//////////////////////////////////////////////////////////////////////

// function countLines(filePath: string): number {
//   try {

//   }
// }