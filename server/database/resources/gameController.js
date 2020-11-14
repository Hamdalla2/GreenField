const Game = require('./game');

exports.find = function (req, res) {
  Game.find(req, res).select('-_id');
};

// exports.create = function (req, res) {
//   Game.create(req, res);
// };