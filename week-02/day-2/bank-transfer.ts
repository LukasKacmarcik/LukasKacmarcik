//bank-transfer.ts

'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

export function getNameAndBalance(acnumber: number) {
  let outcome: any[] = [];
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNumber === acnumber) {
      outcome.push(accounts[i].clientName);
      outcome.push(accounts[i].balance);
    }
  }
  return console.log(outcome);
}
getNameAndBalance(11234543);
//
export function transfer(arr: any[], fromac: number, toac:number, amount: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].accountNumber === fromac) {
      arr[i].balance = arr[i].balance - amount;
    }
    if (arr[i].accountNumber === toac) {
      arr[i].balance = arr[i].balance + amount;
    }
  }
  const found = arr.find(element => element === fromac);
  const found2 = arr.find(element => element === toac);
  if (found || found2 === undefined) {
    console.log('404 - account not found'); 
  }
}

transfer(accounts,43546732,23456311,500.0);
















