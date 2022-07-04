let map:Record<number, string> = {};
if (0 === Object.keys(map).length) {
  console.log(true);
}else {
  console.log(false);
}
/// Better way is: console.log(Object.keys(map).length === 0);
Object.assign(map,{97: 'a'})
Object.assign(map,{98: 'b'})
Object.assign(map,{99: 'c'})
Object.assign(map,{65: 'A'})
Object.assign(map,{66: 'B'})
Object.assign(map,{67: 'C'})
console.log(Object.keys(map));
console.log(Object.values(map));
Object.assign(map,{68: 'D'});
console.log(Object.keys(map).length);
console.log(map[99]);
console.log(map[97]);
delete map[97];
console.log(map[100] !== undefined);
map = {};
console.log(Object.keys(map).length);