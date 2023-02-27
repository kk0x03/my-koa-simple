// index.js
const app = require('./app');

const port = 9527;

app.listen(port, () => {
  console.log(`启动成功：http://localhost:${port}`);
});
