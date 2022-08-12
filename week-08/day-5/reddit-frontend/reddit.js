const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((error) => {
  if (error) {
    console.log('Connection canot connect');
    return;
  }
  console.log('Connection with reddit db is nice and smooth');
});

module.exports = connection;