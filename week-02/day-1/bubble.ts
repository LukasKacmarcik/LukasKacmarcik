//bubble.ts

function bubble(numbers: number[], ascend:boolean) {
    let newArr;
    if(ascend == true) {let newArr = numbers.sort((a,b) => a-b);
        return newArr;
    }else if(ascend == false) {let newArr = numbers.sort((a,b) => b-a);
        return newArr;  
    }

}

console.log(bubble([10, 5, 18, 25, 6, 17], false));
