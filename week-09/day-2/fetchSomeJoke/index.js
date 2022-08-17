const div = document.querySelector('div');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  fetch('http://api.icndb.com/jokes/random')
    .then(result => result.json())
    .then(result => {
      console.log(result.value.joke);
      const p = document.createElement('p');
      p.textContent = result.value.joke;
      div.appendChild(p);
    })
    .catch((error) => {
      console.log(error);
      console.log('Error occured');
    })
})