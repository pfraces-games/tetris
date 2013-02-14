var gen = require('gen');

module.exports = tetris;

var tetris = function (config) {
  return new Tetris(config);
};

var Tetris = function (config) {
  this.engine = gen(config);
  this.player = engine.actor();
};

Tetris.prototype.keymap = function (keymap) {
  this.engine.keymap(keymap);
};

Tetris.prototype.up = function () {
  this.player.move.up();
};

Tetris.prototype.down = function () {
  this.player.move.down();
};

Tetris.prototype.left = function () {
  this.player.move.left();
};

Tetris.prototype.right = function () {
  this.player.move.right();
};
