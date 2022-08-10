const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const subscriber = {
    user_name: e.target[0].value,
    user_email: e.target[1].value
  }
  fetchAddUser(subscriber);
});

function fetchAddUser(newUser) {
  fetch('/signin', {
    method: 'post',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
    .then(response => response.json()
    )
    .then(response => {
      console.log(response);
      const h1 = document.createElement('h1');
      h1.textContent = `Thanks ${response.user_name}, we will send updates to ${response.user_email}`;
      const body = document.querySelector('body');
      body.appendChild(h1);
    })
}
/////////CRAP////////////