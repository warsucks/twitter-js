var express = require('express');
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');

var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(io)
{
  router.post('/submit', urlencodedParser, function(request,response)
  {
      var name = request.body.name;
      var text = request.body.text;
      var newTweet = tweetBank.add(name, text);
      //io.sockets.emit('new_tweet', newTweet);
      //document.getElementById('tweetList').appendChild('<li>'+newTweet.text+'</li>')
      response.redirect('/');
  });

  router.use('/', function(request, response, next)
  {
    response.sendFile(request.path,{root: __dirname+'/..'}, function(err)
    {
      if(err) next();
    });
  });

  router.get('/users/:name', function(request, response)
  {
    var tweets = tweetBank.find({name: request.params.name});
    response.render('index', {name: request.params.name, title: "Tweets by "+request.params.name, tweets: tweets});
  });

  router.get('/users/:name/tweets/:id', function(request, response)
  {
    console.log(request.params.id);
    var tweets = tweetBank.find({id: parseInt(request.params.id)});
    response.render('index', {title: "Tweet by "+request.params.name, tweets: tweets});
  });

  router.get('/',function(request, response, next)
  {
    var tweets = tweetBank.list();
    response.render('index', {title: "All Tweets",tweets: tweets}, function(err, html)
    {
      response.send(html);
    });
  });

  return router;
}


// router.use('/', function(error, request, response, next)
// {
//   ///response.statusCode = error.status;
//   response.send(error.message);
// });
