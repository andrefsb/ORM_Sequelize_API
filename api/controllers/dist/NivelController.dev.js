"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var database = require('../models');

var NivelController =
/*#__PURE__*/
function () {
  function NivelController() {
    _classCallCheck(this, NivelController);
  }

  _createClass(NivelController, null, [{
    key: "pegaTodosOsNiveis",
    value: function pegaTodosOsNiveis(req, res) {
      var todosOsNiveis;
      return regeneratorRuntime.async(function pegaTodosOsNiveis$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(database.Niveis.findAll());

            case 3:
              todosOsNiveis = _context.sent;
              return _context.abrupt("return", res.status(200).json(todosOsNiveis));

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(500).json(_context.t0.message));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "pegaUmNivel",
    value: function pegaUmNivel(req, res) {
      var id, umNivel;
      return regeneratorRuntime.async(function pegaUmNivel$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.id;
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(database.Niveis.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 4:
              umNivel = _context2.sent;
              return _context2.abrupt("return", res.status(200).json(umNivel));

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              return _context2.abrupt("return", res.status(500).json(_context2.t0.message));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "criaNivel",
    value: function criaNivel(req, res) {
      var novoNivel, novoNivelCriado;
      return regeneratorRuntime.async(function criaNivel$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              novoNivel = req.body;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(database.Niveis.create(novoNivel));

            case 4:
              novoNivelCriado = _context3.sent;
              return _context3.abrupt("return", res.status(200).json(novoNivelCriado));

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              return _context3.abrupt("return", res.status(500).json(_context3.t0.message));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "atualizaNivel",
    value: function atualizaNivel(req, res) {
      var id, novasInfos, nivelAtualizado;
      return regeneratorRuntime.async(function atualizaNivel$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              novasInfos = req.body;
              _context4.prev = 2;
              _context4.next = 5;
              return regeneratorRuntime.awrap(database.Niveis.update(novasInfos, {
                where: {
                  id: Number(id)
                }
              }));

            case 5:
              _context4.next = 7;
              return regeneratorRuntime.awrap(database.Niveis.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 7:
              nivelAtualizado = _context4.sent;
              return _context4.abrupt("return", res.status(200).json(nivelAtualizado));

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](2);
              return _context4.abrupt("return", res.status(500).json(_context4.t0.message));

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[2, 11]]);
    }
  }, {
    key: "apagaNivel",
    value: function apagaNivel(req, res) {
      var id;
      return regeneratorRuntime.async(function apagaNivel$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.id;
              _context5.prev = 1;
              _context5.next = 4;
              return regeneratorRuntime.awrap(database.Niveis.destroy({
                where: {
                  id: Number(id)
                }
              }));

            case 4:
              return _context5.abrupt("return", res.status(200).json({
                mensagem: "Id ".concat(id, " successfully deleted.")
              }));

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](1);
              return _context5.abrupt("return", res.status(500).json(_context5.t0.message));

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }
  }, {
    key: "restauraNivel",
    value: function restauraNivel(req, res) {
      var id;
      return regeneratorRuntime.async(function restauraNivel$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = req.params.id;
              _context6.prev = 1;
              _context6.next = 4;
              return regeneratorRuntime.awrap(database.Niveis.restore({
                where: {
                  id: Number(id)
                }
              }));

            case 4:
              return _context6.abrupt("return", res.status(200).json({
                mensagem: "Id ".concat(id, " successfully restored.")
              }));

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](1);
              return _context6.abrupt("return", res.status(500).json(_context6.t0.message));

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }
  }]);

  return NivelController;
}();

module.exports = NivelController;