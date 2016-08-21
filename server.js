var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');

app.use('/vendor', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/data'));

app.get('/', function(req, res){
    res.render('index', {title:"The Shortcuts Test"});
});

app.listen(3000, function () {
  console.log('Web App Running on port 3000!');
});
