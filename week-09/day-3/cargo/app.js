const express = require('express');
const app = express();

let rocket = {
  caliber25: 0,
  caliber30: 0,
  caliber50: 0,
  shipstatus: "empty",
  ready: false
};
let rocketAmmo = 0;

app.get('/rocket', (req, res) => {
  res.send(rocket)
});

app.get('/rocket/fill', (req, res) => {
  if (!req.query.caliber || !req.query.amount) {
    res.status(400).send({ error: 'Gimme caliber and ammo amount!' });
    return;
  }
  const caliber = req.query.caliber;
  const amount = req.query.amount;
  if (caliber == '.25') {
    rocket.caliber25 += amount;
  } else if (caliber == '.30') {
    rocket.caliber30 += amount;
  } else if (caliber == '.50') {
    rocket.caliber50 += amount;
  }
  rocketAmmo += Number.parseInt(amount);

  if (rocketAmmo == 0) {
    rocket.shipstatus = 'empty';
  } else if (rocketAmmo > 0 && rocketAmmo < 12500) {
    rocket.shipstatus = `${Math.floor((rocketAmmo / 12500) * 100)}%`;
  } else if (rocketAmmo == 12500) {
    rocket.shipstatus = `full`;
  } else if (rocketAmmo > 12500) {
    rocket.shipstatus = `overloaded`;
  }

  if (rocket.shipstatus == 'full') {
    rocket.ready = true;
  } else {
    rocket.ready = false;
  }
  res.json({
    received: req.query.caliber,
    amount: rocketAmmo,
    shipstatus: `${rocket.shipstatus}`,
    ready: rocket.ready
  })
});

module.exports = app;