const connection = require('./db');

function fourRngIntegers() {
  const n1 = Math.floor(Math.random() * 10);
  const n2 = Math.floor(Math.random() * 10);
  const n3 = Math.floor(Math.random() * 10);
  const n4 = Math.floor(Math.random() * 10);
  return `${n1.toString()}${n2.toString()}${n3.toString()}${n4.toString()}`;
}

function conQuery(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) {
        console.log(error);
        reject("ConQuery rejected")
        return;
      }
      return resolve(results);
    })
  })
};

module.exports = {
  fourRngIntegers,
  conQuery
}
