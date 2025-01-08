const express = require('express');
const connectDatabase = require('./Backend/database')
const app = express();
const PORT = 3000;


app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  connectDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});

