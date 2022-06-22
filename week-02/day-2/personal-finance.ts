//personal-finance

let listOfSpendings = [500, 1000, 1250, 175, 800, 120];
   
function sumOfSpendings(arr: number[]) {
    let sum = 0;
    for(let i=0; i <= arr.length-1; i++) {
        
        sum = sum + listOfSpendings[i];
        
    }
    return sum;
}

console.log(sumOfSpendings(listOfSpendings));

function findBigest(arr: number[]) {
    let toCompare = 0;
    for(let i=0; i <= arr.length-1; i++) {
        
        if(toCompare < arr[i]) {
            toCompare = arr[i];
        }
    }
    return toCompare;
}

console.log(findBigest(listOfSpendings));

function findSmalest(arr: number[]) {
    let toCompare = arr[0];
    for(let i=1; i <= arr.length-1; i++) {
        if(toCompare > arr[i]) {
            toCompare = arr[i];
        }
            
    }
    return toCompare;
}
    
console.log(findSmalest(listOfSpendings));

function findAverage(arr: number[]) {

    let sum = 0;
    for(let i=0; i <= arr.length-1; i++) {
        
        sum = sum + listOfSpendings[i];
        
    }
    return Math.round((sum/arr.length)*10000)/10000;
}

console.log(findAverage(listOfSpendings));
