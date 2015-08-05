var _ = require('underscore');

var data = [];

function add(name, text)
{
  data.push({name: name, text: text});
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
