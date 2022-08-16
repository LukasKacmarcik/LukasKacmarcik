const fs = require('fs');
const util = require('util');

const asyncReadFile = util.promisify(fs.readFile);

function promisifyReadFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        console.error(error);
        reject('Error while trying to read file');
        return;
      } else {
        return resolve(data);
      }
    })
  })
};

////MANUAL PROMISIFY////
// promisifyReadFile('text.txt')
//   .then(data => data.toString())
//   .then(string => console.log(string));

////UTIL.PROMISIFY() VERSION/////
// asyncReadFile('text.txt')
//   .then(data => data.toString())
//   .then(string => console.log(string));

////ASYNC\AWAIT CHAINING//////
async function logContent() {
  const data = await asyncReadFile('text.txt');
  const string = data.toString();
  console.log(string);
};
logContent()
  .then(() => {
    console.log('Huraaay');
  })