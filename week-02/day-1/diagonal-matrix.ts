//diagonal-matrix.ts

let rows = 4;

for(let i = 0; i < rows; i++) {
    let line = '';
    for(let j = 0; j < rows; j++) {
        if( i == j) {
            line = line + 1;
        }else{
            line = line + 0;
        } 
    }
    console.log(line);
}