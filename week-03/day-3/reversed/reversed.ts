import fs from 'fs';

function decryptReverse(pathFile: string) {
  let message: string = fs.readFileSync(pathFile, 'utf-8');
  let arrToFindLineCount = message.split('\n');
  let lineCount = arrToFindLineCount.length;
  //let arrMessage = message
  let arrInRIghtdirection: string[] = [];
  for (let i = 0; i < lineCount; i++) {
    arrInRIghtdirection.push(arrToFindLineCount[i].split('').reverse().join(''));
  }
  let fixedMessage = arrInRIghtdirection.join('');
  console.log(fixedMessage);
  fs.writeFileSync('test.txt', fixedMessage);
}
decryptReverse('reversed-lines.txt');

