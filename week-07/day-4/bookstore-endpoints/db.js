/*
If you receive this error:
ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication
protocol requested by server; consider upgrading MySQL client
Solution is to open mysql workbench and run this query:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
*/
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Connection to MYSQL is established`);
})

module.exports = connection;