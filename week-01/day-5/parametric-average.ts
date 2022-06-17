// parametric-average.ts

let input = 5;
let sum =0;

function sumNumbers () {

    
    for (let i = 0; i <= input; i++) {

        sum += i

    }
    return sum;
}
sumNumbers();
let average = sum / input;

console.log("the average from 1 to a given number is " + average + " \nand the sum is " + sum);
