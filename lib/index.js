game = (function () {
  /* game engine */

  var engine = (function () {
    var Engine = function () {};

    var priv = {
      board: {
        width: 0,
        height: 0,
        cell: {}
      },
      cell: {
        width: 0,
        height: 0,
        unit: ''
      }
    };

    Engine.prototype.init = function (args) {
      priv.board.width = args.board.width;
      priv.board.height = args.board.height;
      priv.board.cell = args.board.cell;
      priv.cell.width = args.cell.width;
      priv.cell.height = args.cell.height;
      priv.cell.unit = args.cell.unit;

      this.map.init(priv.board);
    };

    Engine.prototype.map = (function () {
      var Matrix = function () {};

      var priv = {
        width: 0,
        height: 0,
        matrix: [],
        extend: function (o) {
          var F = function () {};
          F.prototype = o;
          return new F();
        }
      };

      Matrix.prototype.init = function (args) {
        priv.width = args.width;
        priv.height = args.height;

        /**
         * TODO
         * 
         * *   de momento creo una matriz nueva, pero el resize debe
         *     actualizar la matriz existente
         */
        var m = [];
        for (var y = 0; y < priv.height; y++) (function () {
          var row = [];
          for (var x = 0; x < priv.width; x++) (function () {
            /* sin new todas las celdas deberian ser la misma */
            row.push(priv.extend(args.cell));
          })();
          m.push(row);
        })();
        priv.matrix = m;
      };

      Matrix.prototype.at = function (args) {
        return priv.matrix[args.y][args.x];
      };

      return new Matrix();
    })();

    Engine.prototype.draw = {
      board: function () {
        dal('board')
          .size({
            width: (priv.board.width * priv.cell.width).toString() + 
              priv.cell.unit,
            height: (priv.board.height * priv.cell.height).toString() +
              priv.cell.unit
          })
          .color({ bg: 'red' });

        for (var y = 0; y < priv.board.height; y++) {
          for (var x = 0; x < priv.board.width; x++) {
            Engine.prototype.draw.cell({ x: x, y: y });
          };
        };
      },
      cell: function (args) {
        var cell = dal('cell_' + args.x + '_' + args.y)
          .size({
            width: priv.cell.width.toString() + priv.cell.unit,
            height: priv.cell.height.toString() + priv.cell.unit
          });

        dal('board').add(cell);
        cell
          .color({ bg: Engine.prototype.map.at(args).color })
          .move({
            x: (args.x * priv.cell.width).toString() + priv.cell.unit,
            y: (args.y * priv.cell.height).toString() + priv.cell.unit,
            relative: true
          })
      }
    };

    return new Engine();
  })();

  /* end of game engine */

  var Tetris = function () {};

  var priv = {
    board: {
      width: 10,
      height: 17,
      cell: {}
    },
    cell: {
      width: 3,
      height: 3,
      unit: 'em'
    }
  };

  Tetris.prototype.start = function () {
    engine.init(priv);
    engine.draw.board();
  };

  return new Tetris();
})();
