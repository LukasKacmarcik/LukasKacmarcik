//student-filter.ts

'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
function moreThanFour(arr: any[]) {
  let names: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].candies > 4) {
      names.push(arr[i].name);
    }
  }
  return console.log(names);
  
}
moreThanFour(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average
function averageCandies(arr: any[]) {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i].candies;
  }
  let average = sum / arr.length
  return console.log(average);
}
averageCandies(students);