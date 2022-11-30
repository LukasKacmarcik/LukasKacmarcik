//Find if variable is an object

// const obj = [];

// console.log(Object.prototype.toString.call(obj) === "[object Object]");

////////////////////////////////////////////////////////////////////////////

// PLAYING WITH ASYNC CODE

// function nP(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (n === 5) {
//         reject("num is 5");
//       }
//       resolve("gj");
//     }, 1000);
//   });
// }
// (async () => {
//   try {
//     const response2 = nP(4);
//     const response = nP(5);
//     const response3 = nP(1);
//     const res = await Promise.all([response, response2, response3]);
//     console.log(res);
//   } catch (err) {
//     console.log(err, "'catch log'");
//   }
// })();
///////////////////////////////////////////////////////////////////////////////

/////HOISTING/////

if (true) {
  const num = 6;
  var myFunc = () => {
    return num;
  };
}

//console.log(num);
console.log(myFunc());
