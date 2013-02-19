var gen = require('gen'),
    shortcut = require('shortcut'),
    random = require('random');

module.exports = function (config) {
  return new Tetris(config);
};

var Tetris = function (config) {
  this.engine = gen(config);
  this.player = this.engine.actor(0, 0, nextTetrimino());

  var player = this.player;

  this.playPause = function (keydown) {
    this.engine.playPause();
  };

  this.turnClockwise = function () {
  };

  this.turnCounterClockwise = function () {
  };

  this.hardDrop = function () {
  };

  this.softDrop = function (keydown) {
    if (keydown) {
      player.actions.set('down', player.move.down);
    } else {
      player.actions.del('down');
    }
  };

  this.left = function (keydown) {
    if (keydown) {
      player.actions.set('left', player.move.left);
    } else {
      player.actions.del('left');
    }
  };

  this.right = function (keydown) {
    if (keydown) {
      player.actions.set('right', player.move.right);
    } else {
      player.actions.del('right');
    }
  };
};

Tetris.prototype.keymap = function (keymap) {
  Object.keys(keymap).forEach(function (key) {
    shortcut.on(key, function () {
      keymap[key](true);
    });
    shortcut.onEnd(key, function () {
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
