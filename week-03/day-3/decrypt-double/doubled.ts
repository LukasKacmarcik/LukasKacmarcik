import fs from 'fs';

export function decryptDoubled(pathFile: string) {
  let messageToDecrypt: string = fs.readFileSync(pathFile, 'utf-8');
  let arr: string[] = [];
  for (let i = 0; i < messageToDecrypt.length * 2 ; i += 2) {
    arr.push(messageToDecrypt.charAt(i));
  }
  //console.log(arr);
  let decryptedMessage = arr.join('');
  fs.writeFileSync('output.txt', decryptedMessage);
}
//decryptDoubled('encrypted.txt');