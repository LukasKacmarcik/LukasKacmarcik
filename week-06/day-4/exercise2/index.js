const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  const msgs = {msg1: 'Hello world', msg2: 'Aplication is up and running', msg3: 'We are done', msg4: 'Nice work!'}
  res.render('home', {data: msgs});
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});