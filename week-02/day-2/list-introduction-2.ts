let listA = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
//
console.log(listA.includes('Durian'));
//
listB.splice(3,1);
//
listA.splice(4,0,'Kiwifruit');
//
if(listA.length > listB.length) {
    console.log('List A is longer');
}else if(listA.length < listB.length) {
    console.log('List B is longer');
}else {
    console.log('Lists are the same length');
}
//
console.log(listA.indexOf('Avocado'));
//
console.log(listB.indexOf('Durian'));
//
listB.push('Passion Fruit', 'Pomelo');
//
console.log(listA[2]);
//
console.log(listA);
//
console.log(listB);