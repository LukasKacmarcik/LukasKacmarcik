const express = require('express');
const router = express.Router();
router.use(express.json());

const connection = require('../db.js');

router.get('/', getAllBooksNames)
router.get('/all', getAllBooks)

function getAllBooksNames(req, res) {
  const sql = 'SELECT book_name FROM book_mast';
  connection.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    res.render('titles', { result });
  })
}

function getAllBooks(req, res) {
  let filter = `${Object.keys(req.query).length != 0 ? 'WHERE ' : ''}
    ${req.query.title ? `${`book_name = "${req.query.title}"`} AND ` : ''}
    ${req.query.author ? `${`aut_name = "${req.query.author}"`} AND ` : ''}
    ${req.query.category ? `${`cate_descrip = "${req.query.category}"`} AND ` : ''}
    ${req.query.publisher ? `${`pub_name = "${req.query.publisher}"`} AND ` : ''}
    ${req.query.plt ? `${`book_price < "${req.query.plt}"`} AND ` : ''}
    ${req.query.pgt ? `${`book_price > "${req.query.pgt}"`} AND ` : ''}`
  filter = filter.slice(0, -5);

  const sql = `SELECT book_name AS Title,
                      aut_name AS Author,
                      cate_descrip AS Category,
                      pub_name AS Publisher,
                      book_price AS Price
                      FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id
                      JOIN category ON category.cate_id = book_mast.cate_id
                      JOIN publisher ON publisher.pub_id = book_mast.pub_id 
                      ${filter};`

  connection.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    res.render('all-books', { result })
  })
}

module.exports = router;