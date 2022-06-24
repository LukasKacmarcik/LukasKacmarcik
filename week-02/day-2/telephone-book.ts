//telephone-book

let myMap: Record<string, string> = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982',
}
//
console.log(myMap['John K. Miller']);
//
function getKeyByValue(object:any, value: any) {
  return Object.keys(object).find(key => object[key] === value);
}
console.log(getKeyByValue(myMap, '307-687-2982'));
//
if(myMap['Chris E. Myers'] === undefined) {
  console.log('no');
  
}


