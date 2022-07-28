const express = require('express');

const app = express();

app.set(express.static('assets'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('server is lisening at 3000');
});