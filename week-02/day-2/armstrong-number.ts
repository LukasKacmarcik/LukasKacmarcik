//1634

export function isArmstrongNumber(num:number): any {
  let arrOfNum = num.toString().split('');
  let sum = 0;
  arrOfNum.forEach(val => sum += Math.pow(+val,arrOfNum.length))
  if (sum === num) {
    console.log(`${num} is an Armstrong number`);
  } else {
    console.log(`${num} isn\'t an Armstrong number`);
  }
}

isArmstrongNumber(9926315);
isArmstrongNumber(131072);