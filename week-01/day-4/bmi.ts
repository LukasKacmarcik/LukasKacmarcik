//bmi

let massInKg: number = 81.2;
let heightInM: number = 1.78;

let BMI = massInKg / (Math.pow(heightInM, 2));

console.log("Your bmi is " +Math.round((BMI)*100)/100);
