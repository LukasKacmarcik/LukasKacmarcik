const form = document.forms[0];
const message = document.querySelector('#message');
const urlInput = document.querySelector('#url');
const aliasInput = document.querySelector('#alias');
const button = document.querySelector('button');


form.addEventListener('click', (e) => {
  if (e.target == button) {
    const newAlias = {
      url: urlInput.value,
      alias: aliasInput.value,
      hitCount: 0,
    };
    if (urlInput.value && aliasInput.value) {
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
          }
          return res;
        })
        .then(res => res.json())
        .then(data => {
          message.className = 'answer';
          message.textContent = `Your URL is aliased to ${data.alias} and your secret code is ${data.secretCode}`;
          urlInput.value = '';
          aliasInput.value = '';
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
});