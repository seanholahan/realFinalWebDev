var express = require('express');
/*var app = express();*/

var app = require('express')();


var router = express.Router();

var bodyParser = require('body-parser');
/*app.use(bodyParser.json({type: 'website/json'}));
app.use(bodyParser.urlencoded({ extended: true }));*/

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({ extended: true }));


// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));



require("./test/app.js")(app);
require("./assignment/app")(app);

var port = process.env.PORT || 3000;

app.listen(port);
