const express = require('express');
const connectDatabase = require('./DataBase/database.js')
const userRouter = require("./Routes/user.route.js");
const app = express();
const PORT = 8000;


app.get('/ping', (req, res) => {
  res.send('pong');
});


module.exports = app;