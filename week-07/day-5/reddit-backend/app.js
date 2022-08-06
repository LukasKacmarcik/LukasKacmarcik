const dotenv = require('dotenv');
const { query } = require('express');
dotenv.config();

const PORT = process.env.PORT;

const express = require('express');
const app = express();
app.use(express.json());

const connection = require('./reddit.js');
/////GET////
app.get('/hello', (req, res) => {
  res.status(200).send('Hello World');
})

app.get('/posts', (req, res) => {
  const sql = 'SELECT * FROM posts;'
  connection.query(sql, (error, results) => {
    if (error) {
      console.log(error);
      return;
    }
    res.status(200).send(results);
  })
})
////ADD////
app.post('/posts', (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Data is missing from the body!' });
  } else if (Object.keys(req.body).length > 3 || req.body.score) {
    res.status(400).send({ message: 'Nice try buddy!' });
    return;
  }
  const sql = `INSERT INTO posts SET ?`;
  connection.query(sql, req.body, (error, results) => {
    if (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
    const sql = `SELECT * FROM posts WHERE id = ?`
    connection.query(sql, results.insertId, (error, results) => {
      if (error) {
        res.status(500).send({ message: 'Internal server error' })
      }

      if (results.length == 0) {
        res.status(404).send({ message: 'Post with the given id was not found' })
      }

      res.status(201).send(results);
    })
  })
});
////VOTE////
// app.patch('/posts/:id/upvote', (req, res) => {
//   const sql = `UPDATE posts SET score = score + 1 WHERE id = ?;`
//   connection.query(sql, req.params.id, (error, results) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send({ message: 'Internal Problem with database' })
//     }

//     const sql = 'SELECT * FROM posts WHERE id = ?'
//     connection.query(sql, req.params.id, (error, results) => {
//       if (error) {
//         res.status(500).send({ message: 'Internal problem with database2' })
//       }
//       res.status(200).send(results);
//     })
//   })
// })

app.patch('/posts/:id/downvote', (req, res) => {
  const sql = `UPDATE posts SET score = score - 1 WHERE id = ?;`
  connection.query(sql, req.params.id, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Internal Problem with database' })
    }

    const sql = 'SELECT * FROM posts WHERE id = ?'
    connection.query(sql, req.params.id, (error, results) => {
      if (error) {
        res.status(500).send({ message: 'Internal problem with database2' })
      }
      res.status(200).send(results);
    })
  })
})

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Reddit is lisening at 3000');
});

///VOTE 2.0///
app.patch('/posts/:user/:id/upvote', (req, res) => {
  const sql = `SELECT *, votes.user_id AS vot_user_id, votes.post_id AS vot_post_id
                FROM posts
                JOIN users ON posts.user_id=users.user_id
                LEFT JOIN votes ON votes.user_id=users.user_id
                WHERE users.user_id = ? AND posts.id = ?`
  console.log(req.params.user);
  console.log(req.params.id);
  connection.query(sql, [req.params.user, req.params.id], (error, results) => {
    console.log(results);
    if (error) {
      res.status(500).send({ message: 'Cannot upvote something went wrong' })
    }
    if (results[0].value != null) {
      return;
    }

    const sql = `INSERT INTO votes(user_id, post_id, value)
                        VALUES (${req.params.user}, ${req.params.id}, 1);`
  })
})