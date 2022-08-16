const layout = document.querySelector('#layout');
const form = document.forms[0];
const button = document.querySelector('button');
const input = document.querySelector('input');
const output = document.querySelector('#output');
const errMessage = document.querySelector('.error');

button.addEventListener('click', () => {
  const inputVal = input.value;

  fetchCharacter(inputVal)
    .then(res => res.json())
    .then(res => {
      errMessage.style.display = 'none';
      output.innerHTML = '';
      const newH1 = document.createElement('h1');
      newH1.textContent = 'Character Profile';
      const newName = document.createElement('p');
      newName.textContent = res.name;
      const newHeight = document.createElement('p');
      newHeight.textContent = res.height;
      const newMass = document.createElement('p');
      newMass.textContent = res.mass;

      output.appendChild(newH1);
      output.appendChild(newName);
      output.appendChild(newHeight);
      output.appendChild(newMass);
      return res;
    })
    .then(res => {
      return fetch(`${res.homeworld}`);
    })
    .then(res => res.json())
    .then(planet => {
      const planetName = document.createElement('p');
      planetName.textContent = `Planet Name: ${planet.name}`;
      output.appendChild(planetName);
    })
    .catch(error => {
      output.innerHTML = '';
      errMessage.style.display = 'block';
      console.log(error);
    })
});

///////FUNCTION////////
function fetchCharacter(characterId) {
  if (!Number.isInteger(+characterId)) {
    return Promise.reject('characterId must be an integer');
  }

  return fetch(`http://swapi.dev/api/people/${characterId}`);
}