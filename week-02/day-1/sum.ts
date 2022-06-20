//sum.ts

function sum(topNumber:number) {
    let container = 0;
    for(let i = 0; i <= topNumber; i++) {
        container = container + i;
    }
    return container;
}

console.log(sum(500));
