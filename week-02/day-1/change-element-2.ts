let numbers = [1, 2, 3, 8, 5, 6];

numbers = numbers.map((num, index) => {
  if (index === 3) {
    return 4;
  } else {
    return num;
  }
})
console.log(numbers);
