import fs from 'fs';

function writeMultipleLines(path: string, word: string, number: number) {
  //let changeWord = word + '\n'
  let arr: string[] =[word,'\n'];
  for (let i = 0; i < number -1; i++) {
    arr.push(word + '\n');
  }
  let outcome = arr.join('');
  fs.writeFileSync(path,outcome.slice(0, -1))
}

writeMultipleLines('./asset/my-file.txt', 'I love u <3', 5);