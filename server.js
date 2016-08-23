var express = require('express');
var expressLayouts = require('express-ejs-layouts');

var app = express();
// var path = require('path');

app.set('view engine', 'ejs');
app.set('layout', 'layout');

app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

app.use(expressLayouts);

app.use('/vendor', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/data'));

app.get('/', function(req, res){
  res.render('layout');
});

app.listen(3000, function () {
  console.log('Web App Running on port 3000!');
});
