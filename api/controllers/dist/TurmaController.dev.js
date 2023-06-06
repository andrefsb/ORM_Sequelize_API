"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var database = require('../models');

var TurmaController =
/*#__PURE__*/
function () {
  function TurmaController() {
    _classCallCheck(this, TurmaController);
  }

  _createClass(TurmaController, null, [{
    key: "pegaTodasAsTurmas",
    value: function pegaTodasAsTurmas(req, res) {
      var todasAsTurmas;
      return regeneratorRuntime.async(function pegaTodasAsTurmas$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(database.Turmas.findAll());

            case 3:
              todasAsTurmas = _context.sent;
              return _context.abrupt("return", res.status(200).json(todasAsTurmas));

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
    key: "pegaUmaTurma",
    value: function pegaUmaTurma(req, res) {
      var id, umaTurma;
      return regeneratorRuntime.async(function pegaUmaTurma$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.id;
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(database.Turmas.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 4:
              umaTurma = _context2.sent;
              return _context2.abrupt("return", res.status(200).json(umaTurma));

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
    key: "criaTurma",
    value: function criaTurma(req, res) {
      var novaTurma, novaTurmaCriada;
      return regeneratorRuntime.async(function criaTurma$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              novaTurma = req.body;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(database.Turmas.create(novaTurma));

            case 4:
              novaTurmaCriada = _context3.sent;
              return _context3.abrupt("return", res.status(200).json(novaTurmaCriada));

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
    key: "atualizaTurma",
    value: function atualizaTurma(req, res) {
      var id, novasInfos, turmaAtualizada;
      return regeneratorRuntime.async(function atualizaTurma$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              novasInfos = req.body;
              _context4.prev = 2;
              _context4.next = 5;
              return regeneratorRuntime.awrap(database.Turmas.update(novasInfos, {
                where: {
                  id: Number(id)
                }
              }));

            case 5:
              _context4.next = 7;
              return regeneratorRuntime.awrap(database.Turmas.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 7:
              turmaAtualizada = _context4.sent;
              return _context4.abrupt("return", res.status(200).json(turmaAtualizada));

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
    key: "apagaTurma",
    value: function apagaTurma(req, res) {
      var id;
      return regeneratorRuntime.async(function apagaTurma$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.id;
              _context5.prev = 1;
              _context5.next = 4;
              return regeneratorRuntime.awrap(database.Turmas.destroy({
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
    key: "restauraTurma",
    value: function restauraTurma(req, res) {
      var id;
      return regeneratorRuntime.async(function restauraTurma$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = req.params.id;
              _context6.prev = 1;
              _context6.next = 4;
              return regeneratorRuntime.awrap(database.Turmas.restore({
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
  }, {
    key: "apagaDefinitivoTurma",
    value: function apagaDefinitivoTurma(req, res) {
      var id;
      return regeneratorRuntime.async(function apagaDefinitivoTurma$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              id = req.params.id;
              _context7.prev = 1;
              _context7.next = 4;
              return regeneratorRuntime.awrap(database.Turmas.destroy({
                where: {
                  id: Number(id)
                },
                force: true
              }));

            case 4:
              return _context7.abrupt("return", res.status(200).json({
                mensagem: "Id ".concat(id, " permanently deleted.")
              }));

            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7["catch"](1);
              return _context7.abrupt("return", res.status(500).json(_context7.t0.message));

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }
  }]);

  return TurmaController;
}();

module.exports = TurmaController;