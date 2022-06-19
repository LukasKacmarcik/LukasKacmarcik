let rows = 4;
let holder = '';

for (let i = 1; i <= rows; i++) {
    for (let k = 1; k <= (rows - i); k++) {
        holder = holder + ' ';
    }
    for (let j = 1; j <= i; j++) {
       if (j == 1){
        holder = holder + '*';
       }else {
        holder = holder + '**';
       }
    }
     holder = holder + '\n'
}
 console.log(holder);
 
//    *
//   ***
//  *****
// *******