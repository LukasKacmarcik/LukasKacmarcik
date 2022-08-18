const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
const connection = require('./db-quiz-app');

app.set('view engine', 'ejs');
app.use(express.static('public'));

//////FRONTEND ENDPOINTS//////
app.get('/game', (req, res) => {
  res.render('game');
});

app.get('/questions', (req, res) => {
  res.render('manage');
});

//////BACKEND ENDPOINTS//////
app.get('/api/game', getGame);
app.get('/api/questions', getQuestions);
app.post('/api/questions', addQuestion);
app.delete('/api/questions/:id', removeQuestion);
//////BACKEND ENDPOINTS FUNCTIONS//////
async function removeQuestion(req, res) {
  const sql = `DELETE FROM questions WHERE id = ${req.params.id};`;
  const removeQuestion = await conQuery(sql);
  if (removeQuestion.affectedRows != 1) {
    res.status(400);
    return;
  }
  const sql2 = `DELETE FROM answers WHERE question_id = ${req.params.id};`
  const removeAnswers = await conQuery(sql2);
  if (removeQuestion.affectedRows == 1 && removeAnswers.affectedRows == 4) {
    res.status(204);
    return;
  }
};

async function addQuestion(req, res) {
  const sql = `INSERT INTO questions SET question = "${req.body.question}"`;
  const insertQuestion = await conQuery(sql);
  const answers = req.body.answers;
  const sql2 = `INSERT INTO answers (question_id, answer, is_correct)
                            VALUES  (${insertQuestion.insertId}, "${answers[0].answer_1}", ${answers[0].is_correct}),
                                    (${insertQuestion.insertId}, "${answers[1].answer_2}", ${answers[1].is_correct}),
                                    (${insertQuestion.insertId}, "${answers[2].answer_3}", ${answers[2].is_correct}),
                                    (${insertQuestion.insertId}, "${answers[3].answer_4}", ${answers[3].is_correct});`;
  const insertAnswers = await conQuery(sql2);
  res.status(201).send("Sucessfuly added");
};

async function getQuestions(req, res) {
  const sql = 'SELECT * FROM questions';
  const results = await conQuery(sql);
  res.status(200).json(results);
}

async function getGame(req, res) {
  const sql = 'SELECT COUNT(id) AS count FROM questions;';
  const search1 = await conQuery(sql);
  const count = search1[0].count;
  const randomQuestionIndexToPick = rng(count);
  const outcome = {};
  const sql2 = `SELECT * FROM questions LIMIT 1 OFFSET ${randomQuestionIndexToPick};`;
  const search2 = await conQuery(sql2)
  outcome.id = search2[0].id;
  outcome.question = search2[0].question;
  const answers = [];
  outcome.answers = answers;
  const sql3 = `SELECT * FROM answers WHERE question_id = ${outcome.id};`;
  const search3 = await conQuery(sql3);
  search3.forEach((answer, index) => {
    const newAnswerObj = {};
    newAnswerObj.question_id = answer.question_id;
    newAnswerObj.id = answer.id;
    newAnswerObj[`answer_${index + 1}`] = answer.answer;
    newAnswerObj.is_correct = answer.is_correct;
    answers.push(newAnswerObj);
  });
  res.status(200).json(outcome);
};

function conQuery(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) {
        console.log(error);
        reject('ConQuery rejected');
        return;
      }
      return resolve(results);
    })
  })
};
////////////// functions ////////////////
function rng(number) {
  return (Math.floor(Math.random() * (number - 1)));
}
module.exports = app;