// Create a function that
// - takes the name of a CSV file as a parameter,
//   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - and returns the year when the most births happened.
//   - if there were multiple years with the same number of births then return any of them

// You can find such a CSV file in this directory named births.csv
// If you pass "births.csv" to your function, the result should be either 2006 or 2016.
import fs from 'fs';

function theYear(filePath: string) {
  let linesArr = fs.readFileSync(filePath, 'utf-8').split('\n');
  let yearArr: string[] = [];
  for (let line = 0; line < linesArr.length; line++) {
    let indexOfComma = linesArr[line].indexOf(';');
    yearArr.push(linesArr[line].substring(indexOfComma + 1, indexOfComma + 5));
  }
  let yearInNum: number[] = [];
  yearArr.forEach(year => {
    yearInNum.push(parseInt(year));
  })
  /////////////FIND MOST OCCURED ELEMENT OF ARRAY//////////////////////
  var modeMap: Record<number,number> = {};
  var maxEl = yearInNum[0], maxCount = 1;
  for(var i = 0; i < yearInNum.length; i++)
  {
      var el = yearInNum[i];
      if(modeMap[el] == null)
          modeMap[el] = 1;
      else
          modeMap[el]++;  
      if(modeMap[el] > maxCount)
      {
          maxEl = el;
          maxCount = modeMap[el];
      }
  }
  return maxEl;
}
console.log(theYear('births.csv'));
// let arr = [1, 5, 6, 7, 3, 1, 6];
// console.log(arr.indexOf(3));
