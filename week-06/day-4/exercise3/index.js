const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {data: 'Guest'})
})

app.get('/:name', (req, res) => {
  const data = {name: req.params.name};
  res.render('home', {data: req.params.name})
})


app.listen(3000, () => {
  console.log('server is lisening on 3000');
});