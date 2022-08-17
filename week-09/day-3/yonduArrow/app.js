const express = require('express');
const app = express();

const speedCalc = require('./services/speedCalc.js')

app.get('/yondu', (req, res) => {
  if (!req.query.distance || !req.query.time) {
    res.status(400).json({ error: "Define distance and time" });
    return;
  }
  const speed = speedCalc(req.query.distance, req.query.time);
  res.json({ distance: req.query.distance, time: req.query.time, speed: speed })
})


module.exports = app;