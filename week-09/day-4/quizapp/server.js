const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Quiz app server is lisening to port ${port}`);
});