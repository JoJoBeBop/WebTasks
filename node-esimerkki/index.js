'use strict';
require('dotenv').config();


const express = require('express');

const mysql = require('mysql2');

const multer = require('multer');
const upload = multer({dest: 'public/kuvat/'});

const app = express();


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});

// simple query
connection.query(
    'SELECT * FROM pw_users',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      console.log(err)
    },
);

app.use(express.static('public'));

app.post('/upload', upload.single('kuva'), (req, res, next) => {
  const response = {
    url: 'kuvat/' + req.file.filename,
    mimeType: req.file.mimetype,
  };
  res.send(response);
});



app.listen(3000);

// *********************
// esimerkkejä:
/*
app.get('/', (req, res) => {
  console.log(req.ip);
  console.log(req.query.myParam);
  res.send('ok 1');
});

app.get('/path1/:param1', (req, res) => {
  console.log(req.params.param1);
  res.send('ok 2');
});

app.get(['/path2', '/path3', '/path4'], (req, res) => {
  console.log(req);
  res.send('ok 3');
});

app.use('/json', (req, res, next) => {
  console.log('Middleware tässä');
  next();
});

app.get('/json', (req, res) => {
  const objekti = {
    id: 1,
    name: 'My response',
  };
  res.send(objekti);
});
*/