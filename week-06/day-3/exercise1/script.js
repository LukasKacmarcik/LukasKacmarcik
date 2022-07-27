{/* <script>
1. store the element that says 'The King' in the 'king' variable.
console.log it.
2. store 'The Businessman' and 'The Lamplighter'
in the 'businessLamp' variable.
console.log each of them.
3. store 'The King' and 'The Conceited Man'
in the 'conceitedKing' variable.
alert them one by one.
4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
in the 'noBusiness' variable.
console.log each of them.
</script> */}

const king = document.getElementById('b325');
console.log(king);

const businessLamp = document.querySelectorAll('.asteroid.big');
// businessLamp.forEach(element => {
//   console.log(element);
// });

const container = document.querySelector('.container').children;
//const conceitedKing = [container[0], container[1]];
for (let i = 0; i < container.length; i++) {
  window.alert(container[i].textContent)
};
const lamplighter = document.querySelector('.asteroid.b329.big');
const noBusiness = [container[0], container[1], lamplighter]
noBusiness.forEach(tag => {
  console.log(tag);
})