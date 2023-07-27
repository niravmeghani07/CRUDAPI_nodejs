//const connection = require('./config/connection');
const express = require('express');
const bodyParser = require('body-parser');
var router = require('./controller/apicontroller');
//var htmlController = require('./controller/htmlcontroller');
var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.use('/assets',express.static(__dirname+ '/public'));
app.use('/',router);
app.set('view engine','ejs');

app.listen(port);

module.exports = app;