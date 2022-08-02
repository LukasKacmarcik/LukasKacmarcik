const express = require('express')
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/sith', (req, res) => {
  if (req.body.text == undefined || req.body.text == '') {
    res.send({error: "Feed me some text you have to, padawan young you are. Hmmm."})
  } else {
    console.log(typeof req.body.text);
    res.send({sith_text: parseSentences(req.body.text)})};
});


app.listen(3000, () => {
  console.log('sith is lisening at 3k');
});


const parseSentences = (sentence) => {
  let sentences = sentence.split('.');
  sentences = sentences.map(sente => sente.trim());
  sentences = sentences.filter(senten => senten != '');
  let newSentences = [];
  sentences.forEach(sent => {
    let words = sent.split(' ');
    let newOrderSent = [];
    let tempWord = '';
    words.forEach((word, index) => {
      if (index == words.length - 1 && index % 2 == 0) {
        newOrderSent.push(word.toLowerCase());
      } else if (index % 2 == 0) {
        tempWord = word;
      } else if (index % 2 != 0) {
        newOrderSent.push(word.toLowerCase());
        newOrderSent.push(tempWord.toLowerCase());
      }
    });
    newOrderSent[0] = newOrderSent[0].charAt(0).toUpperCase() + newOrderSent[0].slice(1);
    newSentences.push(newOrderSent.join(' '));
  });
  return newSentences.join('. Well uhh. ') + '. Uhmmm uhmm.';
};

// let testString = "This is my example sentence. Just for fun.";
// console.log(parseSentences(testString));