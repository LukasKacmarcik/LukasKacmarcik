'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
 name: string,
 alcohol: number,
 guns: number
};

const queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// const watchlist: string[] = [];
// let securityAlcoholLoot: number = 0;

export function securityCheck(arr: any[]) {
  let canEnter: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].guns === 0) {
      securityAlcoholLoot = securityAlcoholLoot + arr[i].alcohol;
      arr[i].alcohol = 0; 
    }
    if (arr[i].guns === 0) {
      canEnter.push(arr[i].name);
    }
    if (arr[i].guns !== 0) {
      watchlist.push(arr[i].name);
    }
    arr[i].guns = 0;
  }
  return console.log(canEnter);
}

securityCheck(queue);
console.log(watchlist);
console.log(securityAlcoholLoot);