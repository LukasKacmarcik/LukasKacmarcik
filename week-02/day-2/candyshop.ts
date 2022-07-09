let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

export function repairSweets(arr: any[]) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'boolean') {
      arr[i] = 'Ice cream';
    }
    if (typeof arr[i] == 'number') {
      arr[i] = 'Croissant';
    }
  }
  return console.log(arr);
}
repairSweets(shopItems);