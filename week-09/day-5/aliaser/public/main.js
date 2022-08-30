const form = document.forms[0];
const message = document.querySelector('#message');
const urlInput = document.querySelector('#url');
const aliasInput = document.querySelector('#alias');
const button = document.querySelector('button');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newAlias = {
    url: urlInput.value,
    alias: aliasInput.value,
    hitCount: 0,
  };

  fetch(`/api/links/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAlias)
  })
    .then(res => {
      if (res.status == 400) {
        message.className = 'error';
        message.textContent = 'Your alias is alredy in use!';
        return Promise.reject(new Error('Your alias is already in use'));
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      message.className = 'answer';
      message.innerHTML = `<p>Your URL is aliased to <strong>${data.alias}</strong> and your secret code is <strong>${data.secretCode}</strong><p>`;
      urlInput.value = '';
      aliasInput.value = '';
    })
    .catch((error) => {
      console.log(error);
    })
});