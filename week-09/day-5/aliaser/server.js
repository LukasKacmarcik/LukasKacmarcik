const dotenv = require('dotenv');
dotenv.config();

const app = require('./app.js');
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});
