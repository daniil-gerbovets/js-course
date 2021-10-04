const express = require('express');

const app = express();
const port = 8000;

app.use(express.static(`${__dirname}/public`));

const dateObj = new Date();
// current hours
const hours = dateObj.getHours();
// current minutes
const minutes = dateObj.getMinutes();
// current seconds
const seconds = dateObj.getSeconds();
const dateTime = `${hours}:${minutes}:${seconds}`;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}! ${dateTime}`);
});
