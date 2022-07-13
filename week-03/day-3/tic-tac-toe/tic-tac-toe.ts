import fs from 'fs';

function ticTacResult(filePath: string) {
  let o = fs.readFileSync('./win-o.txt', 'utf-8');
  let x = fs.readFileSync('./win-x.txt', 'utf-8');
  let draw = fs.readFileSync('./draw.txt', 'utf-8');

  if (fs.readFileSync(filePath, 'utf-8') === o) {
    return 'O';
  } else if (fs.readFileSync(filePath, 'utf-8') === x) {
    return 'X';
  } else if (fs.readFileSync(filePath, 'utf-8') === draw){
    return 'Draw';
  }
}

console.log(ticTacResult('draw.txt'))