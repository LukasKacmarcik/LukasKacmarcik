//student-counter.ts

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
function listOfNames(arr: any[]) {
  let names = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].candies > 4) {
      names.push(arr[i].name);
    }
  }
  return names;
}
console.log(listOfNames(students));
// create a function called sumOfAge() that takes a list of students and returns:
// - The sum of the age of people who have less than 5 candies
function sumOfAge(arr: any[]) {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].candies < 5) {
      sum = sum + arr[i].age;
    }
  }
  return sum;
}
console.log(sumOfAge(students));
