const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('assets'));

const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input != undefined) {
    res.send({received: req.query.input * 1, result: req.query.input * 2});
  } else {
    res.send({error: 'Please provide an input!'});
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name != undefined && req.query.title != undefined) {
    res.send({welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`});
  } else if (req.query.name == undefined && req.query.title == undefined) {
    res.status(400).send({error: "Please provide a name and a title!"});
  } else if (req.query.name === undefined) {
    res.status(400).send({error: "Please provide a name!"});
  } else if (req.query.title === undefined) {
    res.status(400).send({error: "Please provide a title!"});
  }
});

app.get('/appenda/:appendable', (req, res) => {
  if (req.params.appendable != undefined) {
    res.send({appended: `${req.params.appendable}a`});
  } else {
    res.status(404);
  }
});

app.post('/dountil/:operation', (req, res) => {
  if (req.params.operation == 'sum') {
    console.log(sum(req.body.until));
    res.send({result: sum(req.body.until)});
  } else if (req.params.operation == 'factor') {
    res.send({result: factor(req.body.until)});
  } else if (typeof req.body.until != typeof 5) {
    res.send({error: 'Please provide a number!'});
  }
});


const sum = (number) => {
  if (number <= 0) {
    return 0;
  } else {
    return number + sum(number - 1);
  }
};

const factor = (number) => {
  if (number <= 1) {
    return 1;
  } else {
    return number * factor(number - 1);
  }
};

app.listen(3000, () => {
  console.log('Server is on lisening to port 3000');
});