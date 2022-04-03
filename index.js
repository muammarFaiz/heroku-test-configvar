// jshint esversion: 9
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  });
});

app.listen(process.env.PORT || 3000, () => console.log('server running port 3000 faiz...'));
