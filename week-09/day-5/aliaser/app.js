const express = require('express');
const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

const mainRouter = require('./routes/main.js');
/////// BACKEND ENDPOINTS /////////
app.use('/', mainRouter);
/////// FRONTEND ENDPOINTS /////////
app.get('/', (req, res) => {
  res.render('main');
})

module.exports = app;