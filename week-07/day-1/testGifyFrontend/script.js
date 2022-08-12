const body = document.getElementsByTagName('body')[0];
fetch('http://localhost:3000/api/post')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });