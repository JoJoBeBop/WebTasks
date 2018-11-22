'use strict';
require('dotenv').config();
const express = require('express');
// const fs      = require('fs');
// const https   = require('https');

const database = require('./modules/database');
const resize = require('./modules/resize');

const multer = require('multer');
const upload = multer({dest: 'public/files/'});

const app = express();

/*
const sslkey  = fs.readFileSync('/etc/pki/tls/private/ca.key');
const sslcert = fs.readFileSync('/etc/pki/tls/certs/ca.crt');
const options = {
  key: sslkey,
  cert: sslcert
};
*/

app.use(express.static('public'));

// create the connection to database
const connection = database.connect();


//TESTI, toimiiko tietokanta
database.select(connection, (results) => {
  console.log(results);
});

//CALLBACK FUNK.
const insertToDB = (data, res, next) => {
  database.insert(data, connection, () => {
    next();
  });
};

const selectAll = (req, next) => {
  database.select(connection, (results) => {
    req.custom = results;
    next();
  });
};

//Kuva tallentuu, rivi 10 (tallenna tiedosto)
app.post('/upload', upload.single('kuva'), (req, res, next) => {
  console.log(req.file);
  console.log(req.body); //sisältää tavalliset tekstikentät
  next();
});
//Tee thumbnail
app.use('/upload', (req, res, next) => {
  resize.resizeImage(req.file.path, 150, './public/thumbs/' + req.file.filename + '_thumb');
  next();
});


//Tallenna tiedot tietokantaan
app.use('/upload', (req, res, next) => {
  const data = [
      req.body.fname,
      req.body.lname,
      req.file.filename,
      req.file.filename + '_thumb',
      req.file.mimetype
  ];
  insertToDB(data, res, next);
});

//Hae päivitetyt tiedot tietoannasta
app.use('/upload', (req, res, next) => {
  selectAll(req, next);
});

//Lähetä tiedot selaimeen
app.use('/upload', (req, res) => {
  res.send(req.custom);
});

/*
app.get('/test', (req,res) => {
  if (req.secure) res.send('https :)');
  else res.send('hello not secure?');
});
*/

app.listen(8000); //normal http traffic
// https.createServer(options, app).listen(3000); //https traffic