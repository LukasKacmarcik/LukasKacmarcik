const express = require('express');
const app = express();

app.use(express.json());

app.post('/translate', (req, res) => {
  if ((req.body.text == undefined || req.body.lang == undefined) || (req.body.text == '' || req.body.lang == '')) {
    res.send({error: "I can't translate that!"});
  } else {
    res.send({translated: sifruj(req.body.text), lang: 'slovenska hatlanina'});
  }
});

app.listen(3000, () =>  {
  console.log('lisening to port 3000');
});

const sifruj = (text) => {
  const samohlasky = ['a', 'e', 'i', 'o', 'u'];
  let arrOfString = text.split('');
  arrOfString = arrOfString.map(char => {
    if (samohlasky.includes(char)) {
      return char += ('p' + char);
    } else {
      return char = char;
    };
  });
  return arrOfString.join('');
};