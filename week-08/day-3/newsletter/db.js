const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'subdb'
});

connection.connect((error) => {
  if (error) {
    console.log(error, 'Error ocured while connecting to db');
  }
  console.log(`Connection to MYSQL is established`);
});

module.exports = connection;