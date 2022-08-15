const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
const connection = require('../reddit.js');

router.get('/', getAllPosts);
router.get('/getuser/:user_id', getUser);
router.get('/get/:post_id', getPost);
router.get('/:id/upvote', upvotePost);
router.get('/:id/downvote', downvotePost);
router.post('/', addPost);
router.post('/update/:post_id', updatePost);
router.delete('/delete/:post_id', deletePost);

function getUser(req, res) {
  const sql = `SELECT name FROM users WHERE user_id = ?`;
  connection.query(sql, req.params.user_id, (error, results) => {
    if (error) {
      console.log(error);
    }
    res.json(results[0]);
  })
}

function deletePost(req, res) {
  const sql = `DELETE FROM posts WHERE id = ?;`;
  connection.query(sql, req.params.post_id, (error, results) => {
    if (error) {
      console.log(error);
      return;
    }
    if ((JSON.stringify(results.affectedRows)) == '1') {
      res.send("Sucessfuly deleted");
    }
  })
};

function getPost(req, res) {
  const sql = 'SELECT * FROM posts WHERE id = ?;';
  connection.query(sql, req.params.post_id, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json('Error with connection');
    }
    res.json(results);
  })
};

function updatePost(req, res) {
  const sql = `UPDATE posts SET ? WHERE id = ?;`;
  connection.query(sql, [req.body, req.params.post_id], (error, results) => {
    if (error) {
      console.log(error);
      return;
    }
    const sql = `SELECT * FROM posts WHERE id = ?;`
    connection.query(sql, req.params.post_id, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      res.status(201).redirect('/');
    })
  })
}

function downvotePost(req, res) {
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
};

function upvotePost(req, res) {
  const sql = `UPDATE posts SET score = score + 1 WHERE id = ?;`
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
};

function addPost(req, res) {
  if (!req.body) {
    res.status(400).json({ message: 'Data is missing from the body!' });
    return;
  } else if (Object.keys(req.body).length > 3 || req.body.score) {
    res.status(400).json({ message: 'Nice try buddy!' });
    return;
  }
  console.log(JSON.stringify(req.body));
  const sql = `INSERT INTO posts SET ?`;
  connection.query(sql, req.body, (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
    const sql = `SELECT * FROM posts WHERE id = ?`
    connection.query(sql, results.insertId, (error, results) => {
      if (error) {
        res.status(500).json({ message: 'Internal server error' })
      }

      if (results.length == 0) {
        res.status(404).json({ message: 'Post with the given id was not found' })
      }

      res.status(201).redirect('/');
    })
  })
};

function getAllPosts(req, res) {
  const sql = 'SELECT * FROM posts';
  connection.query(sql, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json('Error with connection');
    }
    res.json(results);
  })
};


module.exports = router;