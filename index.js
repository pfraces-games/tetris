var gen = require('gen');

var tetris = module.exports = function (config) {
  return new Tetris(config);
};

var Tetris = function (config) {
  this.engine = gen(config);
  this.player = this.engine.actor({ x: 0, y: 0 });
};

Tetris.prototype.keymap = function (keymap) {
  tetris.engine.keymap(keymap);
};

Tetris.prototype.up = function () {
  tetris.player.move.up();
};

Tetris.prototype.down = function () {
  tetris.player.move.down();
};

Tetris.prototype.left = function () {
  tetris.player.move.left();
};

Tetris.prototype.right = function () {
  tetris.player.move.right();
};
