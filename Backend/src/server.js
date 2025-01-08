const express = require('express');
const connectDatabase = require('./DataBase/database.js')
const app = express();
const PORT = 8000;


app.get('/ping', (req, res) => {
  res.send('pong');
});


module.exports = app;