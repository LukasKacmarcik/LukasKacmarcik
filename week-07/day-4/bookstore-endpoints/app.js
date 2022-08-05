const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT;

app.set('view engine', 'ejs');

const book_mastRouter = require('./routes/book_mast.js');

app.use('/books', book_mastRouter);
app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`app is lisening at port ${port}`);
})