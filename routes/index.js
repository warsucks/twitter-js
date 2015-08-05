var express = require('express');
var tweetBank = require('../tweetBank');

var router = express.Router();

router.get('/',function(request, response)
{
  var tweets = tweetBank.list();
  response.render('index', {title: 'Twitter.js', tweets: tweets});
});

module.exports = router;
