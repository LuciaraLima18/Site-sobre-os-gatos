// server.js

const express = require('express');
const path = require('path');
const app = express();
const port = 5500;


app.use(express.static(path.join(__dirname, 'front-end')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'pg1.html'));
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${5500}`);
});
