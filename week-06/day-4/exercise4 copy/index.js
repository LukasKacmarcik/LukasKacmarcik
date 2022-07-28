const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const todos = ['get up', 'survive', 'go back to bed'];
  res.render('home', {todos: todos})
})

app.listen(3000, () => {
  console.log('server is lisening on 3000');
});