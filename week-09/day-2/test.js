const originalArr = [1, 5, 1, 3, 5, 7, 9, 7, 3];

////////// MY FAVORITE VERSION NO EXTRA SHIT ///////////
// function fillArr(arr) {
//   let newArr = [];
//   arr.forEach(num => {
//     newArr.push(num);
//   });
//   const bannedNumber = 1;
//   if (newArr.includes(bannedNumber)) {
//     return Promise.reject(`Dont use number ${bannedNumber}`);
//   }
//   return Promise.resolve(newArr);
// }

////// TEACHED VERSION //////////
function fillArr(arr) {
  return new Promise((resolve, reject) => {
    let newArr = [];
    arr.forEach(num => {
      newArr.push(num);
    });
    const bannedNumber = 11;
    if (newArr.includes(bannedNumber)) {
      reject(`Dont use number ${bannedNumber}`);
    }
    resolve(newArr);
  })
};

//// USING THEN ////
fillArr(originalArr)
  .then(arr => console.log(arr))
  .catch((err) => {
    console.log(err);
  });

//// USING ASYNC/AWAIT/////
// async function workWithArr() {
//   try {
//     const newArr = await fillArr(originalArr);
//     console.log(newArr);
//   } catch (error) {
//     console.log(error, 'EYA');
//   }
// };
// workWithArr();
////////////////////////////