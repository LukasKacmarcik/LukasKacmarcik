//factorio.ts

function calculateFactorial(input:number) {
    let container = 1;
    for(let i = 1; i <= input; i++) {
        container = container * i; 
    }
    return container;
}

console.log(calculateFactorial(3));
