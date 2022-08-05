const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World');
})


app.listen(3000, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Reddit is lisening at 3000');
});