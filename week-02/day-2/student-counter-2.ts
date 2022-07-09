'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function called listOfNames() that takes a list of students and returns:
// - The name of students who have more than 4 candies
export function listOfNames(arr: any[]) {
  let names = arr.filter(obj => obj.candies > 4);
  names.forEach(obj => console.log(obj.name)
  )
  let namezzz: string[] = [];
  names.forEach(obj => namezzz.push(obj.name)
  )
  return namezzz;
}
// create a function called sumOfAge() that takes a list of students and returns:
// - The sum of the age of people who have less than 5 candies
export function sumOfAge(arr: any[]) {
  let sum: number = 0;
  arr.forEach(object => {
    if(object.candies < 5) {
      sum += object.age;
    }
  })
  return sum;
}