var _ = require('underscore');

var data = [];
var id = 1;

function add(name, text)
{
  data.push({name: name, text: text, id: id++});
  return data[data.length-1];
}

function list()
{
  return _.clone(data);
}

function find(properties)
{
  return _.where(data, properties);
}

module.exports =
{
  add: add,
  list: list,
  find: find
};

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

module.exports.add("ChelseaDu","Sleepy and cold");
