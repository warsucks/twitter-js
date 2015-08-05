var express = require('express');
var swig = require('swig');
var bodyParser = require('body-parser');
var routes = require('./routes');
var morgan = require('morgan');
var socketio = require('socket.io');

var app = express();

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname+"/public"));
app.use('/',routes(io));

var server = app.listen(3000, function()
{
  console.log("Listening at 3000");
});

var io = socketio.listen(server);
