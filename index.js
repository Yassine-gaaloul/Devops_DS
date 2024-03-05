const express = require('express');
const app = express();

app.post('/', (req, res) => {
  res.send('Hello orld!');
});

module.exports = app; // export the app for testing
