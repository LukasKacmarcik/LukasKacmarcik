const dotenv = require('dotenv');
dotenv.config();



const PORT = process.env.PORT;

const express = require('express');
const app = express();
app.use(express.json());

const postRouter = require('./routes/posts.js');
/////GET////
app.use('/heloo', postRouter);
app.use('/posts', postRouter);
////ADD////
app.post('/posts', postRouter);
////VOTE////
app.patch('/posts', postRouter);
app.patch('/posts', postRouter);
////UPDATE////
app.patch('/posts', postRouter);


app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Reddit is lisening at 3000');
});