//unique.ts


function findUniqueItemss(numbers: number[])  {
    let newArr = [... new Set(numbers)];
    return newArr;
}

console.log(findUniqueItemss([10, 50, 60, 60 ,50 ,28 ,62,]));
 