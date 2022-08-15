const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

const express = require('express');
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.use(express.static('public'))

const postRouter = require('./routes/posts.js');

app.use('/api/posts', postRouter);

app.get('/post', (req, res) => {
  res.render('newPost');
})

app.get('/', (req, res) => {
  res.render('home');
});



app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Reddit is lisening at 3000');
});