//unique.ts


function findUniqueItems(numbers: number[])  {
    let newArr = [... new Set(numbers)];
    return newArr;
}

console.log(findUniqueItems([10, 50, 60, 60 ,50 ,28 ,62,]));
 