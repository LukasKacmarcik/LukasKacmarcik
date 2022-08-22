const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
app.use(express.json());

const connection = require('./db');
app.set('view engine', 'ejs');
app.use(express.static('public'));

/////// BACKEND ENDPOINTS /////////

/////// FRONTEND ENDPOINTS /////////



function conQuery(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) {
        console.log(error);
        reject("ConQuery rejected")
        return;
      }
      return resolve(results);
    })
  })
};

module.exports = app;