const mongoose = require('mongoose');

let gameSchema = mongoose.Schema({
  game: String,
  url: String
});

let Game = mongoose.model('Game', gameSchema);

module.exports = Game;