var gen = require('gen'),
    shortcut = require('shortcut'),
    random = require('random');

module.exports = function (config) {
  return new Tetris(config);
};

var Tetris = function (config) {
  var tetris = this;
  this.engine = gen(config);
  this.player = this.engine.actor(0, 0, nextTetrimino());

  var player = this.player;

  this.playPause = function () {
    tetris.engine.playPause();
  };

  this.turnClockwise = function () {
  };

  this.turnCounterClockwise = function () {
  };

  this.hardDrop = function () {
  };

  this.softDrop = function () {
    player.actions.add(player.move.down);
  };

  this.left = function () {
    player.actions.add(player.move.left);
  };

  this.right = function () {
    player.actions.add(player.move.right);
  };
};

Tetris.prototype.keymap = function (keymap) {
  Object.keys(keymap).forEach(function (key) {
    shortcut.on(key, function () {
      keymap[key]();
    });
  });
};

var nextTetrimino = (function () {
  var tetriminos = [
    [
      [1,1,1,1]
    ],
    [
      [1,0,0],
      [1,1,1]
    ],
    [
      [0,0,1],
      [1,1,1]
    ],
    [
      [1,1],
      [1,1]
    ],
    [
      [0,1,1],
      [1,1,0]
    ],
    [
      [1,1,0],
      [0,1,1]
    ],
    [
      [0,1,0],
      [1,1,1]
    ]
  ];

  return random(tetriminos).pick;
})();
