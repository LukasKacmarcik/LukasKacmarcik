const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
app.use(express.json());

const connection = require('./db');
app.set('view engine', 'ejs');
app.use(express.static('public'));

/////// BACKEND ENDPOINTS /////////
app.post('/api/links', postAlias);
app.get('/a/:alias', getAlias);
app.get('/api/links', getLinks);
app.delete('/api/links/:id', deleteAlias);
/////// FRONTEND ENDPOINTS /////////
app.get('/', (req, res) => {
  res.render('main');
})

async function deleteAlias(req, res) {
  const sql = `SELECT * FROM aliases WHERE id = ?;`
  const aliasExist = await conQuery(sql, req.params.id);
  if (aliasExist.length == 0) {
    res.sendStatus(404);
    return;
  }

  if (aliasExist[0].secretCode != req.body.secretCode) {
    res.sendStatus(403);
    return;
  }

  const sql2 = `DELETE FROM aliases WHERE id = ?;`
  const deletedAlias = await conQuery(sql2, req.params.id);
  res.sendStatus(204);
}

async function getLinks(req, res) {
  const sql = `SELECT id, url, alias, hitCount FROM aliases;`
  const allAliases = await conQuery(sql);

  res.json(allAliases);
}

async function getAlias(req, res) {
  const sql = `SELECT * FROM aliases WHERE alias = ?`;
  const checkExistence = await conQuery(sql, req.params.alias);
  if (checkExistence.length != 1) {
    res.status(404).send("Alias don\'t exist");
    return;
  };

  const sql2 = `UPDATE aliases SET hitCount = hitCount + 1 WHERE alias = ?;`
  const updateHitCount = await conQuery(sql2, req.params.alias);

  const sql3 = `SELECT url FROM aliases WHERE alias = ?;`
  const updatedAlias = await conQuery(sql3, req.params.alias);
  console.log(updatedAlias[0].url);
  res.status(301).redirect(updatedAlias[0].url);
};

async function postAlias(req, res) {
  const sql = `SELECT * FROM aliases WHERE alias = ?`;
  const valSearch = await conQuery(sql, req.body.alias);
  if (valSearch.length == 1) {
    res.sendStatus(400);
    return;
  };

  const newSecretCode = fourRngIntegers();
  const newAliaser = {
    url: req.body.url,
    alias: req.body.alias,
    hitCount: req.body.hitCount,
    secretCode: newSecretCode
  };

  const sql2 = `INSERT INTO aliases SET ?`
  const insertAliaser = await conQuery(sql2, newAliaser);

  const sql3 = `SELECT * FROM aliases WHERE id = ?`
  const insertedAliaser = await conQuery(sql3, insertAliaser.insertId);

  res.status(201).json(insertedAliaser[0]);
};

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

/////// FUNCTIONS ///////
function fourRngIntegers() {
  const n1 = Math.floor(Math.random() * 10);
  const n2 = Math.floor(Math.random() * 10);
  const n3 = Math.floor(Math.random() * 10);
  const n4 = Math.floor(Math.random() * 10);
  return `${n1.toString()}${n2.toString()}${n3.toString()}${n4.toString()}`;
}


module.exports = app;