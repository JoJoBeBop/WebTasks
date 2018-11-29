'use strict';
require('dotenv').config();
const express = require('express');
const db = require('./modules/database');
const resize = require('./modules/resize');
const exif = require('./modules/exif');

//const fs      = require('fs');
//const https   = require('https');

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: 'public/uploads/'});
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const connection = db.connect();

const cb = (result, res) => {
    console.log(result);
    res.send(result);
};

/*//https proxy
const sslkey  = fs.readFileSync('/etc/pki/tls/private/ca.key');
const sslcert = fs.readFileSync('/etc/pki/tls/certs/ca.crt');
const options = {
  key: sslkey,
  cert: sslcert
};*/

app.use(express.static('public'));

// tallenus ja next
app.post('/upload', upload.single('mediafile'), (req, res, next) => {
    next();
});

//thumbi
app.use('/upload', (req, res, next) => {

    resize.doResize(req.file.path, 200,
        './public/thumbs/' + req.file.filename + '_thumb', next);
});

//mediumi
app.use('/upload', (req, res, next) => {

    resize.doResize(req.file.path, 720,
        './public/medium/' + req.file.filename + '_medium', next);
});

//koordinaatit
app.use('/upload', (req, res, next) => {
    exif.getCoordinates(req.file.path).then(koordinaatit => {
        req.coordinates = koordinaatit;
        next();
    }).catch(() => {
        console.log('No coordinates');
        req.coordinates = {};
        next();
    });
});

//upload
app.use('/upload', (req, res, next) => {
    console.log('insert is here');
    const data = [
        req.body.category,
        req.body.title,
        req.body.details,
        req.file.filename + '_thumb',
        req.file.filename + '_medium',
        req.file.filename,
        req.coordinates,
    ];
    db.insert(data, connection, next);
});

//datan saanti ja sen lähettäminen
app.use('/upload', (req, res) => {

    db.select(connection, cb, res);
});

app.get('/images', (req, res) => {

    db.select(connection, cb, res);
});

app.patch('/images', (req, res) => {

    console.log('body', req.body);
    const update = db.update(req.body, connection);
    console.log('update', update);
    res.send('{"status": "Ok"}');
});

app.delete('/images/:mID', (req, res) => {

    const mID = [req.params.mID];
    db.del(mID, connection);
    res.send('{"status": "Succesfully deleted"}');
});

app.get('/search/:category', (req, res) => {

    const category = [req.params.category];
    console.log('Category ', category[0]);
    db.search(category, connection, cb, res);
    console.log('Search');
    // res.send('{"status": "kai tää jotain tekee"}');
});

/*
//https
http.createServer((req, res) => {

  const redir = 'https://' + req.headers.host + '/node' + req.url;
  console.log('redir', redir);
  res.writeHead(301, {'Location': redir});
  res.end();

}).listen(8000);

https.createServer(options, app).listen(3000);*/


app.listen(8002);