const body = document.getElementsByTagName('body')[0];
fetch('https://api.giphy.com/v1/gifs/trending?api_key=rOovc0CrhvPZyzCeRdND4ySe5pTJv3VD&limit=16')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 16; i++) {
      let img = document.createElement('img');
      img.src = data.data[i].images.downsized_still.url;
      img.addEventListener("click", () => {
        img.src = data.data[i].images.downsized.url;
      });
      body.appendChild(img);
    }
  })
  .catch(err => {
    console.error(err);
  });