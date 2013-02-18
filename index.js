var gen = require('gen');

module.exports = function (config) {
  return new Tetris(config);
};

var Tetris = function (config) {
  this.engine = gen(config);
  this.player = this.engine.actor({ x: 0, y: 0 });

  var player = this.player;

  this.up = function () {
    player.actions.set('up', player.move.up);
  };

  this.down = function () {
    player.actions.set('down', player.move.down);
  };

  this.left = function () {
    player.actions.set('left', player.move.left);
  };

  this.right = function () {
    player.actions.set('right', player.move.right);
  };
};

Tetris.prototype.keymap = function (keymap) {
  this.engine.keymap(keymap);
};
