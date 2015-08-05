var express = require('express');
var swig = require('swig');
var routes = require('./routes');

var app = express();

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

var data =
{
  title : "Friend List",
  people : [{name: "Gandalf"}, {name: "Frodo"}, {name: "Hermione"}]
};

app.use(function(request, response)
{
  console.log(request.method, request.path, response.statusCode);
  response.render('index',data);
});
/*
app.get('/', function(request, response)
{
  console.log(response.statusCode);
  response.send("Hello World!");
});*/

var server = app.listen(3000, function()
{
  console.log("Listening at 3000");
});
