//map-introduction-1

let myMap: Record<number, string> = {

}

let isEmpty = Object.keys(myMap).length === 0;

console.log(isEmpty);

Object.assign(myMap,{97: 'a'})
Object.assign(myMap,{98: 'b'})
Object.assign(myMap,{99: 'c'})
Object.assign(myMap,{65: 'A'})
Object.assign(myMap,{66: 'B'})
Object.assign(myMap,{67: 'C'})

console.log(Object.keys(myMap));
console.log(Object.values(myMap));

Object.assign(myMap,{68: 'D'})

console.log(Object.keys(myMap).length);
console.log(myMap[99]);

console.log(myMap[97]);
 
delete(myMap[97]);

let isAsociated = myMap[100] !== undefined;
console.log(isAsociated);

function deleteKeysValuesPairs(myObj: any, array: any) {
    for(let i = 0; i < array.length; i++ ){
        delete myObj[array[i]];
    }
    return myObj;
}
let arrToRemove = [97, 98, 99, 65, 66, 67, 68];
deleteKeysValuesPairs(myMap, arrToRemove);

console.log(Object.keys(myMap).length);


