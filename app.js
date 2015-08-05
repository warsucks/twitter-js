var express = require('express');
var app = express();

app.use(function(request, response)
{
  console.log(request.method, request.path, response.statusCode);
  response.end();
});

app.get('/', function(request, response)
{
  console.log(response.statusCode);
  response.send("Hello World!");
});

var server = app.listen(3000, function()
{
  console.log("Listening at 3000");
});
