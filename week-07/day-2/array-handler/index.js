const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.post('/arrays', (req, res) => {
  if (req.body.what != undefined && req.body.numbers != undefined) {
    if (req.body.what == 'sum') {
      res.send({result: sum(req.body.numbers)});
    } else if (req.body.what == 'multiply') {
      res.send({result: multiply(req.body.numbers)});
    } else if (req.body.what == 'double') {
      res.send({result: double(req.body.numbers)});
    }
  } else {
    res.send({error: "Please provide what to do with the numbers!"});
  }
});

app.listen( 3000, () => {
  console.log('server lisening at port 3000');
});

const sum = (array) => {
  return array.reduce((sum, number) => sum + number, 0
  )};
  
  const multiply = (array) => {
    return array.reduce((sum, number) => sum * number, 1
  )};
  
  const double = (array) => {
    return array.map((number) => number * 2
  )};