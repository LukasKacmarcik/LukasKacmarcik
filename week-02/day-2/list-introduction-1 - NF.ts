//list-introduction-1

let namesList: string[] = [];

console.log(namesList.length);

let name1 = 'William';
namesList.push(name1);


if(namesList.length != 0) {
    console.log('List is not empty');
}

namesList.push('John');
namesList.push('Amanda');

console.log(namesList.length);


function callName(element:string) {
    console.log(element);
    }

namesList.forEach(callName);

namesList.splice(1, 1);
namesList.reverse();

namesList.forEach(callName);