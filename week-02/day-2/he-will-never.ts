//he-will-never.ts

// Things are a little bit messed up here
// Your job is to decode the notSoCrypticMessage by using the hashmap as a lookup table
// Assemble the fragments into the out variable

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap : Record<number, string> = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

// function decodeMessage(message: number[]) {
//     message.forEach(function(value) {
//         out = out + hashmap[value];
//     })

//     return out;
// }
// console.log(decodeMessage(notSoCrypticMessage));

//MY SOLUTION//



for(let i = 0; i < notSoCrypticMessage.length; i++) {
    var newArr: string[]=[];
    
    for(let j = 0; j < 8; j++) {
        if(notSoCrypticMessage[i] == parseInt(Object.keys(hashmap)[j])) {
            let experiment = parseInt(Object.keys(hashmap)[j]);
            newArr.push(hashmap[experiment]);
        
            
            
            console.log(hashmap[experiment]);
            
        }
        
    } 
    
    //console.log(newArr);
}

//console.log(Object.keys(hashmap)[4]);
// for(let i = 0; i < 8; i++) {
//      console.log(parseInt(Object.keys(hashmap)[7]));
    
 // }
//let number: number = 50;
//console.log(hashmap['number']);
//console.log(notSoCrypticMessage[1]);
//console.log(Object.values(hashmap));

// let word = 'slovo';

// let array: string[]=[];

// array = (array.push(word));

// console.log(array);
