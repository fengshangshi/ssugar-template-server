/*
var S = require('ssugar');
var sugar = new S(__dirname);
console.log(sugar);
console.log(global);
*/
var express = require('express');
var app = express();

app.use('/', function(req, res) {
		res.end('Hello world');
});

app.listen(8080);
