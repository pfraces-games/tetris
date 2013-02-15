var gen = require('gen');

module.exports = function (config) {
  return new Tetris(config);
};

var Tetris = function (config) {
  var self = this;
  this.engine = gen(config);
  this.player = this.engine.actor({ x: 0, y: 0 });

  this.up = function () {
    self.player.move.up();
  };

  this.down = function () {
    self.player.move.down();
  };

  this.left = function () {
    self.player.move.left();
  };

  this.right = function () {
    self.player.move.right();
  };
};

Tetris.prototype.keymap = function (keymap) {
  this.engine.keymap(keymap);
};
