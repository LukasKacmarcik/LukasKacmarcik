import fs from 'fs';

function copy(pathFrom: string, pathTo: string) {
  let container: string = '';
  container = fs.readFileSync(pathFrom, 'utf-8');
  fs.writeFileSync(pathTo, container);
  return fs.readFileSync(pathFrom, 'utf-8') === fs.readFileSync(pathTo, 'utf-8');
}
console.log(copy('./asset/my-file.txt','./asset/my-file2.txt'));