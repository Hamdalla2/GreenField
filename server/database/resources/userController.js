// import schemas
const User = require('./user.js');

exports.create = function(req, res) {
  User.create(req, res);
};

exports.find = function (req, res) {
  User.find(req, res);
};

exports.delete = function(req, res) {
  User.remove(req, res);
};