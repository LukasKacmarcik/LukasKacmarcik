// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".
import fs from 'fs';

function writeLine(filePath: string) {
  try {
    fs.writeFileSync(filePath, 'Lukas Kacmarcik');
  } catch (error: any) {
    console.log('Unable to write file: my-file.txt');
  }
}
writeLine('../asset/my-file.txt');