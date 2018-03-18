'use strict';

var express = require('express');

var port = 3000;

var app = express();


app.get('/', (req, res) => {
  res.json('Funcionando!');
});


app.get('/number', (req, res) => {
  res.json(100);
});


app.get('/array', (req, res) => {
  res.json(["Exemplo", "de", "array"]);
});

app.listen(port, function () {
    console.log('Running on port %s', port);
});