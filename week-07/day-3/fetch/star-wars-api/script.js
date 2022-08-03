const inputField = document.getElementById('inputField');
const myButton = document.getElementById('myButton');
const leftList = document.getElementById('left');
const rightList = document.getElementById('right');

myButton.addEventListener('click', () => {
  const inputValue = inputField.value;
  inputField.value = '';
  leftList.innerHTML = '';
  rightList.innerHTML = '';
  fetch(`https://swapi.dev/api/people/?search=${inputValue}`)
    .then(response => response.json())
    .then(response => {
      for (let i = 0; i < response.results.length; i++) {
        let li = document.createElement('li');
        li.textContent = response.results[i].name;
        li.addEventListener('click', () => {
          rightList.innerHTML = '';
          for (let j = 0; j < response.results[i].films.length; j++) {
            fetch(`${response.results[i].films[j]}`)
              .then(data => data.json())
              .then(data => {
                const lis = document.createElement('li');
                lis.textContent = data.title;
                rightList.appendChild(lis);
              })
          }
        })
        leftList.appendChild(li);
      }
    })
});