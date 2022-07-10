import fs from 'fs';

export function decryptDoubled(pathFile: string) {
  // if(fs.existsSync(pathFile) === false) {
  //   return 'Unable to read';
  // }
  let messageToDecrypt: string = fs.readFileSync(pathFile, 'utf-8');
  let arr: string[] = [];
  for (let i = 0; i < messageToDecrypt.length * 2 ; i += 2) {
    arr.push(messageToDecrypt.charAt(i));
  }
  //console.log(arr);
  let decryptedMessage = arr.join('');
  fs.writeFileSync('output.txt', decryptedMessage);
  return decryptedMessage;
}
decryptDoubled('encrypted.txt');