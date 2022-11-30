// fetch(`https://swapi.dev/api/people/1`, {
//  method: post,
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify(object),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))

//   .catch((err) => console.log(err));
// const axios = require("axios");
// (async () => {
//   try {
//     const response = await axios(`https://swapi.dev/api/people/1`);
//     if (response.statusText === "OK") {
//       console.log(response.status);
//     }
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// You have a basket and several items of different sizes. You want to pack as many items as possible in your basket, but there is a size limit.

// Create a function called basketFilter that takes a array of numbers representing the size of items to pack (itemSizes) and a number representing the size of the basket (limit). Return a new array that holds as many elements of the first array as possible where the sum of the new elements aren't larger than the limit. Do not try to create a combination of

// Do not try to create a combination of elements, process the array from start to end.
// Example case:

// basketFiller([4, 2, 7, 4, 2, 3], 15);
// It should return [4, 2, 7, 2].

// function basketFiller(arr, limit) {
//   const newArr = [];
//   arr.forEach((number) => {
//     let sum = newArr.reduce((acc, num) => acc + num, 0);
//     if (sum + number <= limit) {
//       newArr.push(number);
//     }
//   });
//   return newArr;
// }
/////////////////////////////////////////////////////////////////////////////////////////

// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");
// const arr = new Array(10);
// arr.fill(0);
// console.log(arr);
// console.log([...arr]);
// console.log(arr == [...arr]);

// const newArr = [
//   [
//     [1, 1],
//     [2, 2],
//   ],
//   [
//     [3, 3],
//     [4, 4],
//   ],
//   [
//     [5, 5],
//     [6, 6],
//   ],
// ];
// const newArr2 = [...newArr];
// newArr2[1] = [
//   [8, 8],
//   [9, 9],
// ];
// console.log(newArr);

// const arr = [
//   {
//     person: {
//       name: "lukas",
//     },
//   },
// ];
// const arr2 = [...arr];
// arr2[0].person.name = "peter";
// console.log(arr);

// const obj = {
//   age: 25,
//   people: {
//     name: "Lukas",
//   },
//   arr: [1, 2, 3],
//   function: () => {
//     return 5;
//   },
// };
// const obj2 = JSON.parse(JSON.stringify(obj));
// // const obj2 = { ...obj };
// // const obj2 = obj;
// obj2.age = 74;
// obj2.people.name = "Peter";
// obj2.arr = [5, 6, 7];
// console.log(obj);
// console.log(obj2);
/////////////////////////////////////////////////////////////////////////////////
// class Measurements {
//   static wweight = {
//     mg: 0.001,
//     g: 1,
//     dg: 10,
//     kg: 1000,
//     t: 100000,
//   };
//   constructor() {
//     debugger;
//     this.lengthh = {
//       mm: 0.001,
//       cm: 0.01,
//       dm: 0.1,
//       m: 1,
//       km: 1000,
//     };
//     this.weight = {
//       mg: 0.001,
//       g: 1,
//       dg: 10,
//       kg: 1000,
//       t: 1000000,
//     };
//   }

//   static logMY() {
//     console.log(this.wweight);
//   }

//   logme() {
//     console.log(this.weight);
//     console.log(this.lengthh);
//   }

//   listType(unit) {
//     switch (unit) {
//       case Object.keys(this.lengthh).includes(unit) && unit:
//         return "Length";
//       case Object.keys(this.weight).includes(unit) && unit:
//         return "Weight";
//     }
//   }
// }
// Measurements.logMY();
// const m = new Measurements();
// console.log(m.wweight);
// console.log(m.listType("t"));
// console.log("hmm", __filename);
/////////////////////////////////////////////////////////////////////////////////

// function outher() {
//   let n = 5;
//   console.log("this outher ", this);
//   return function inner() {
//     console.log(n);
//     console.log("this ", this);
//   };
// }

// let f = outher();
// f();
// console.log(this);
/////////////////////////////////////////////////////////////////////////////////
// class Man {
//   constructor(name = "Jozo") {
//     this.name = name;
//   }
//   logMName(n) {
//     console.log(`Man is called ${n || this.name}`);
//   }
// }

// class Woman {
//   constructor(name = "Nika") {
//     this.name = name;
//   }
//   logWName(n) {
//     console.log(`Woman is called ${n || this.name}`);
//   }
// }
// let m = new Man();
// let w = new Woman();
// let w2 = new Woman("Jana");
// // m.logName();
// // w.logName();
// m.logMName.call(w2, "Anna");
// m.logMName.apply(w2, ["Zuza"]);
/////////////////////////////////////////////////////////////////////////////////
// function logArr(...args) {
//   args.forEach((arg) => console.log(arg));
// }
// logArr(1, 5, 6);
// logArr.apply(null, ["\n", 10, 125, "car"]);
/////////////////////////////////////////////////////////////////////////////////
// const mul = (x) => (y) => (z) => {
//   return x * y * z;
// };
// console.log(mul(2)(3)(4));
// console.log(mul(4)(3)(4));
// let h = mul(2);
// let j = h(4);
// let k = j(5);
// console.log(k);
/////////////////////////////////////////////////////////////////////////////////
//console.log(Array.isArray([]));
/////////////////////////////////////////////////////////////////////////////////
// var output = (function (x) {
//   delete x;
//   return x;
// })(0);

// console.log(output);
/////////////////////////////////////////////////////////////////////////////////
// const o = {
//   name: "Lukas",
// };
// delete o.name;
// console.log(o.name);
/////////////////////////////////////////////////////////////////////////////////
// var bar = true;
// console.log(bar + 0);
// console.log(bar + "xyz");
// console.log(bar + true);
// console.log(bar + false);
/////////////////////////////////////////////////////////////////////////////////
// var salary = "1000$";

// (function () {
//   console.log("Original salary was " + salary);

//   var salary = "5000$";

//   console.log("My New Salary " + salary);
// })();
/////////////////////////////////////////////////////////////////////////////////
// function k() {
//   var i = 5;
//   j = 10;
// }
// k();
// console.log(i);
// console.log(j);
/////////////////////////////////////////////////////////////////////////////////
// function d(n) {
//   return n * 2;
// }
// console.log(Object.toString.call(d));
/////////////////////////////////////////////////////////////////////////////////
// const h = new String("sjadlas");
// console.log(h instanceof String);
/////////////////////////////////////////////////////////////////////////////////
// class O {
//   constructor(name = "Jozo", person = { hair: "Yellow" }) {
//     (this.name = name), (this.person = person);
//   }
//   logO() {
//     console.log(this);
//   }
// }
// const i = new O();
// console.log(i);
// console.log(i.hasOwnProperty("logO"));
// i.logO = () => console.log("i logO");
// i.logO();
// console.log(i.hasOwnProperty("logO"));
/////////////////////////////////////////////////////////////////////////////////
// console.log(isNaN(NaN));
// console.log(isNaN({}));
// console.log(isNaN("asdads"));
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN("asdads"));
/////////////////////////////////////////////////////////////////////////////////
// const f = () => {};
// console.log([] instanceof Array);
// console.log(typeof f);
/////////////////////////////////////////////////////////////////////////////////
// const Employee = {
//   name: "Lukas",
//   logName() {
//     console.log(this.name);
//   },
// };
// const emp1 = Object.create(Employee);
// emp1.logName();
// console.log(emp1);
// console.log(emp1.name);
// emp1.name = "Peter";
// console.log(emp1);
// emp1.logName();
// Employee.logName();
/////////////////////////////////////////////////////////////////////////////////
// const o = {
//   name: "Lukas",
// };
// Object.freeze(o);
// o.name = "Peter";
// console.log(o.name);
/////////////////////////////////////////////////////////////////////////////////
// function myLog(thingToLog) {
//   console.log(`MyPrefix: ${thingToLog}`);
// }
// myLog("car");
// const myLog2 = (myPrefix) => (thingToLog) =>
//   console.log(`${myPrefix} ${thingToLog}`);
// const testLog = myLog2("test:");
// testLog("works");
/////////////////////////////////////////////////////////////////////////////////
// var ltrlStr = "Hi I am string literal";
// var objStr = new String("Hi I am string object");
// console.log(ltrlStr instanceof String);
// console.log(objStr instanceof String);
// console.log(typeof ltrlStr);
// console.log(typeof objStr);
// console.log(objStr.charAt(5));
/////////////////////////////////////////////////////////////////////////////////
const AND = "and";
const NULL = "zero";
const NUMBERS = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const TENS = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const UNITS = [
  "",
  "",
  "hundred",
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion",
  "quintillion",
  "sextillion",
  "septillion",
  "octillion",
  "nonillion",
  "decillion",
  "undecillion",
  "duodecillion",
  "tredecillion",
  "quattuordecillion",
  "quindecillion",
  "sedecillion",
  "septendecillion",
  "octodecillion",
  "novendecillion",
  "vigintillion",
  "unvigintillion",
  "duovigintillion",
  "tresvigintillion",
  "quattuor­vigint­illion",
  "quinvigintillion",
  "sesvigintillion",
  "septemvigintillion",
  "octovigintillion",
  "novemvigintillion",
  "trigintillion",
  "untrigintillion",
  "duotrigintillion",
  "trestrigintillion",
  "quattuor­trigint­illion",
  "quintrigintillion",
  "sestrigintillion",
  "septentrigintillion",
  "octotrigintillion",
  "noventrigintillion",
  "quadragintillion",
  "quinquagintillion",
  "sexagintillion",
  "septuagintillion",
  "octogintillion",
  "nonagintillion",
  "centillion",
  "uncentillion",
  "decicentillion",
  "undecicentillion",
  "viginticentillion",
  "unviginticentillion",
  "trigintacentillion",
  "quadra­gintacent­illion",
  "quinqua­gintacent­illion",
  "sexagintacentillion",
  "septuagintacentillion",
  "octogintacentillion",
  "nonagintacentillion",
  "ducentillion",
  "trecentillion",
  "quadringentillion",
  "quingentillion",
  "sescentillion",
  "septingentillion",
  "octingentillion",
  "nongentillion",
  "millinillion",
];
const ZEROS = [
  0, 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54,
  57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108,
  111, 114, 117, 120, 123, 153, 183, 213, 243, 273, 303, 306, 333, 336, 363,
  366, 393, 423, 453, 483, 513, 543, 573, 603, 903, 1203, 1503, 1803, 2103,
  2403, 2703, 3003,
];

function toWords(n) {
  n = n
    .toString()
    .replace(/[^0-9]/g, "")
    .replace(/^0+/, "");
  console.log("n:", n);
  if (!n.length || n.length > ZEROS.at(-1)) return "";
  if (!Number(n)) return NULL;

  if (n < 20) return NUMBERS[n];
  if (n < 100) {
    if (NUMBERS[n % 10]) {
      return TENS[Math.floor(n / 10)] + "-" + NUMBERS[n % 10];
    } else {
      return TENS[Math.floor(n / 10)];
    }
  }
  const length = n.length;
  const index = ZEROS.findIndex((n) => n > length - 1) - 1;
  console.log(
    "zeros",
    ZEROS.findIndex((n) => n > length - 1)
  );

  const [major, minor] = [
    n.substring(0, length - ZEROS[index]),
    n.substring(length - ZEROS[index]),
  ].map(toWords);
  console.log(major, minor);

  return (
    major +
    " " +
    UNITS[index] +
    (index === 2 && minor ? ` ${AND} ` : minor == "" ? "" : " ") +
    (major.split(" ").length > minor.split(" ").length
      ? `${AND} ${minor}`
      : minor || "")
  );
}

//console.log(toWords(42));
//console.log(toWords(1999));
console.log(toWords(2001));
//console.log(toWords(17999));
//console.log(toWords(100001));
//console.log(toWords(342251));
//console.log(toWords(1300420));
