const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  // const received = req.query.message;
  // const translated = 'I am Groot!';
  if (!req.query.message) {
    res.status(404).json({ error: 'I am groot!' });
    return;
  }
  res.send({ received: req.query.message, translated: "I am Groot!" })
});

module.exports = app;