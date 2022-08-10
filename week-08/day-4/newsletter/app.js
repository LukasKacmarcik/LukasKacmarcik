const express = require('express');
const app = express();
app.use(express.json());

app.use(express.static('public'));

const connection = require('./db.js')

app.post('/signin', (req, res) => {
  const sql = `INSERT INTO subscribers SET ?`
  //console.log(req.body);
  connection.query(sql, req.body, (error, response) => {
    if (error) {
      console.log(error);
      return;
    }

    const sql = `SELECT * FROM subscribers ORDER BY id DESC LIMIT 1;`
    connection.query(sql, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(response[0]);
      res.send(response[0]);
    })
  })
})


app.get('/', (req, res) => {
  const sql = `SELECT * FROM subscribers`;
  connection.query(sql, (error, response) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(response);
    res.sendFile('/public/index.html')
  })
})








app.listen(3000, () => {
  console.log('Newsletter app is lisening at port 3000');
});