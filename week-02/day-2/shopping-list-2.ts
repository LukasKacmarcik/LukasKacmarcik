//shopping-list-2

let shopingList: Record<string, number> = {
  'Milk': 1.07,
  'Rice': 1.59,
  'Eggs': 3.14,
  'Cheese': 12.60,
  'Chicken Breasts': 9.40,
  'Apples': 2.31,
  'Tomato': 2.58,
  'Potato': 1.75,
  'Onion': 1.10,
}
//
let bobList: Record<string, number> = {
  'Milk': 3,
  'Rice': 2,
  'Eggs': 2,
  'Cheese': 1,
  'Chicken Breasts': 4,
  'Apples': 1,
  'Tomato': 2,
  'Potato': 1,
}
//
let aliceList: Record<string, number> = {
  'Rice': 1,
  'Eggs': 5,
  'Chicken Breasts': 2,
  'Apples': 1,
  'Tomato': 10,
}


function getSum(shopList: Object , personList: Object) {
  let sum = 0;
  for ( let i = 0; i < Object.keys(personList).length; i++) {
    for(let j = 0; j < Object.keys(shopList).length; j++) {
      if(Object.keys(personList)[i] === Object.keys(shopList)[j]) {
        sum = sum + (Object.values(personList)[i] * Object.values(shopList)[j]);
      }
    }
  }
  return console.log(sum);
}

getSum(shopingList, bobList);
getSum(shopingList, aliceList);

if(bobList['Rice'] > aliceList['Rice']) {
  console.log('Bob');
  }else {
    console.log('Alice');
}

if(bobList['Potato'] !== undefined && aliceList['Potato'] !== undefined ){
  if(bobList['Potato'] > aliceList['Potato']) {
    console.log('Bob');
    }else {
      console.log('Alice');
  }
}else if(bobList['Potato'] !== undefined) {
  console.log('Bob');
}else{
  console.log('Alice');
}

if(bobList['Ham'] !== undefined && aliceList['Ham'] !== undefined ){
  if(bobList['Ham'] > aliceList['Ham']) {
    console.log('Bob');
    }else {
      console.log('Alice');
  }
}else if(bobList['Ham'] !== undefined) {
  console.log('Bob');
}else if(aliceList['Ham'] !== undefined) {
  console.log('Alice');
}else if(bobList['Ham'] === undefined && aliceList['Ham'] === undefined) {
  console.log('no one');
}

if (bobList['Apples'] !== undefined && aliceList['Apples'] !== undefined ){
  if (bobList['Apples'] > aliceList['Apples']) {
    console.log('Bob');
    }else if (bobList['Apples'] < aliceList['Apples']) {
      console.log('Alice');
    }else {
      console.log('no one');
    }
}else if (bobList['Apples'] !== undefined) {
  console.log('Bob');
}else if (aliceList['Apples'] !== undefined) {
  console.log('Alice');
}else if (bobList['Apples'] === undefined && aliceList['Apples'] === undefined) {
  console.log('no one');
}

if (Object.keys(bobList).length > Object.keys(aliceList).length) {
  console.log('Bob');
}else {
  console.log('Alice');
}
let bobsItemCount = 0;
let aliceItemCount = 0;
for (let i = 0; i < Object.keys(bobList).length; i++) {
  bobsItemCount = bobsItemCount + Object.values(bobList)[i];
}
for (let i = 0; i < Object.keys(aliceList).length; i++) {
  aliceItemCount = aliceItemCount + Object.values(aliceList)[i];
}

if (aliceItemCount > bobsItemCount) {
  console.log('Alice');
}else {
  console.log('Bob');
}









