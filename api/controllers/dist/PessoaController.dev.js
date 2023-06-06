"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var database = require('../models');

var PessoaController =
/*#__PURE__*/
function () {
  function PessoaController() {
    _classCallCheck(this, PessoaController);
  }

  _createClass(PessoaController, null, [{
    key: "pegaTodasAsPessoas",
    value: function pegaTodasAsPessoas(req, res) {
      var todasAsPessoas;
      return regeneratorRuntime.async(function pegaTodasAsPessoas$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(database.Pessoas.findAll());

            case 3:
              todasAsPessoas = _context.sent;
              return _context.abrupt("return", res.status(200).json(todasAsPessoas));

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
    key: "pegaUmaPessoa",
    value: function pegaUmaPessoa(req, res) {
      var id, umaPessoa;
      return regeneratorRuntime.async(function pegaUmaPessoa$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.id;
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(database.Pessoas.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 4:
              umaPessoa = _context2.sent;
              return _context2.abrupt("return", res.status(200).json(umaPessoa));

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
    key: "criaPessoa",
    value: function criaPessoa(req, res) {
      var novaPessoa, novaPessoaCriada;
      return regeneratorRuntime.async(function criaPessoa$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              novaPessoa = req.body;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(database.Pessoas.create(novaPessoa));

            case 4:
              novaPessoaCriada = _context3.sent;
              return _context3.abrupt("return", res.status(200).json(novaPessoaCriada));

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
    key: "atualizaPessoa",
    value: function atualizaPessoa(req, res) {
      var id, novasInfos, pessoaAtualizada;
      return regeneratorRuntime.async(function atualizaPessoa$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              novasInfos = req.body;
              _context4.prev = 2;
              _context4.next = 5;
              return regeneratorRuntime.awrap(database.Pessoas.update(novasInfos, {
                where: {
                  id: Number(id)
                }
              }));

            case 5:
              _context4.next = 7;
              return regeneratorRuntime.awrap(database.Pessoas.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 7:
              pessoaAtualizada = _context4.sent;
              return _context4.abrupt("return", res.status(200).json(pessoaAtualizada));

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
    key: "apagaPessoa",
    value: function apagaPessoa(req, res) {
      var id;
      return regeneratorRuntime.async(function apagaPessoa$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.id;
              _context5.prev = 1;
              _context5.next = 4;
              return regeneratorRuntime.awrap(database.Pessoas.destroy({
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
    key: "restauraPessoa",
    value: function restauraPessoa(req, res) {
      var id;
      return regeneratorRuntime.async(function restauraPessoa$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = req.params.id;
              _context6.prev = 1;
              _context6.next = 4;
              return regeneratorRuntime.awrap(database.Pessoas.restore({
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
    key: "pegaUmaMatricula",
    value: function pegaUmaMatricula(req, res) {
      var _req$params, estudanteId, matriculaId, umaMatricula;

      return regeneratorRuntime.async(function pegaUmaMatricula$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _req$params = req.params, estudanteId = _req$params.estudanteId, matriculaId = _req$params.matriculaId;
              _context7.prev = 1;
              _context7.next = 4;
              return regeneratorRuntime.awrap(database.Matriculas.findOne({
                where: {
                  id: Number(matriculaId),
                  estudante_id: Number(estudanteId)
                }
              }));

            case 4:
              umaMatricula = _context7.sent;
              return _context7.abrupt("return", res.status(200).json(umaMatricula));

            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](1);
              return _context7.abrupt("return", res.status(500).json(_context7.t0.message));

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "criaMatricula",
    value: function criaMatricula(req, res) {
      var estudanteId, novaMatricula, novaMatriculaCriada;
      return regeneratorRuntime.async(function criaMatricula$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              estudanteId = req.params.estudanteId;
              novaMatricula = _objectSpread({}, req.body, {
                estudante_id: Number(estudanteId)
              });
              _context8.prev = 2;
              _context8.next = 5;
              return regeneratorRuntime.awrap(database.Matriculas.create(novaMatricula));

            case 5:
              novaMatriculaCriada = _context8.sent;
              return _context8.abrupt("return", res.status(200).json(novaMatriculaCriada));

            case 9:
              _context8.prev = 9;
              _context8.t0 = _context8["catch"](2);
              return _context8.abrupt("return", res.status(500).json(_context8.t0.message));

            case 12:
            case "end":
              return _context8.stop();
          }
        }
      }, null, null, [[2, 9]]);
    }
  }, {
    key: "atualizaMatricula",
    value: function atualizaMatricula(req, res) {
      var _req$params2, estudanteId, matriculaId, novasInfos, matriculaAtualizada;

      return regeneratorRuntime.async(function atualizaMatricula$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _req$params2 = req.params, estudanteId = _req$params2.estudanteId, matriculaId = _req$params2.matriculaId;
              novasInfos = req.body;
              _context9.prev = 2;
              _context9.next = 5;
              return regeneratorRuntime.awrap(database.Matriculas.update(novasInfos, {
                where: {
                  id: Number(matriculaId),
                  estudante_id: Number(estudanteId)
                }
              }));

            case 5:
              _context9.next = 7;
              return regeneratorRuntime.awrap(database.Matriculas.findOne({
                where: {
                  id: Number(matriculaId)
                }
              }));

            case 7:
              matriculaAtualizada = _context9.sent;
              return _context9.abrupt("return", res.status(200).json(matriculaAtualizada));

            case 11:
              _context9.prev = 11;
              _context9.t0 = _context9["catch"](2);
              return _context9.abrupt("return", res.status(500).json(_context9.t0.message));

            case 14:
            case "end":
              return _context9.stop();
          }
        }
      }, null, null, [[2, 11]]);
    }
  }, {
    key: "apagaMatricula",
    value: function apagaMatricula(req, res) {
      var _req$params3, estudanteId, matriculaId;

      return regeneratorRuntime.async(function apagaMatricula$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _req$params3 = req.params, estudanteId = _req$params3.estudanteId, matriculaId = _req$params3.matriculaId;
              _context10.prev = 1;
              _context10.next = 4;
              return regeneratorRuntime.awrap(database.Matriculas.destroy({
                where: {
                  id: Number(matriculaId)
                }
              }));

            case 4:
              return _context10.abrupt("return", res.status(200).json({
                mensagem: "Registration ".concat(matriculaId, " from student ").concat(estudanteId, " successfully deleted.")
              }));

            case 7:
              _context10.prev = 7;
              _context10.t0 = _context10["catch"](1);
              return _context10.abrupt("return", res.status(500).json(_context10.t0.message));

            case 10:
            case "end":
              return _context10.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }
  }, {
    key: "consultaMatriculaApagado",
    value: function consultaMatriculaApagado(req, res) {
      var _req$params4, estudanteId, matriculaId, resultado;

      return regeneratorRuntime.async(function consultaMatriculaApagado$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _req$params4 = req.params, estudanteId = _req$params4.estudanteId, matriculaId = _req$params4.matriculaId;
              _context11.prev = 1;
              _context11.next = 4;
              return regeneratorRuntime.awrap(database.Matriculas.findOne({
                paranoid: false,
                where: {
                  id: Number(matriculaId),
                  estudante_id: Number(estudanteId)
                }
              }));

            case 4:
              resultado = _context11.sent;
              return _context11.abrupt("return", res.status(200).json({
                resultado: resultado
              }));

            case 8:
              _context11.prev = 8;
              _context11.t0 = _context11["catch"](1);
              return _context11.abrupt("return", res.status(500).json(_context11.t0.message));

            case 11:
            case "end":
              return _context11.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "restauraMatricula",
    value: function restauraMatricula(req, res) {
      var _req$params5, estudanteId, matriculaId;

      return regeneratorRuntime.async(function restauraMatricula$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _req$params5 = req.params, estudanteId = _req$params5.estudanteId, matriculaId = _req$params5.matriculaId;
              _context12.prev = 1;
              _context12.next = 4;
              return regeneratorRuntime.awrap(database.Matriculas.restore({
                where: {
                  id: Number(matriculaId),
                  estudante_id: Number(estudanteId)
                }
              }));

            case 4:
              return _context12.abrupt("return", res.status(200).json({
                mensagem: "Id ".concat(matriculaId, " from ").concat(estudanteId, " successfully restored.")
              }));

            case 7:
              _context12.prev = 7;
              _context12.t0 = _context12["catch"](1);
              return _context12.abrupt("return", res.status(500).json(_context12.t0.message));

            case 10:
            case "end":
              return _context12.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }
  }, {
    key: "consultaRegistroApagado",
    value: function consultaRegistroApagado(req, res) {
      var _req$params6, nomeDoModelo, consultaId, resultado;

      return regeneratorRuntime.async(function consultaRegistroApagado$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _req$params6 = req.params, nomeDoModelo = _req$params6.nomeDoModelo, consultaId = _req$params6.consultaId;
              _context13.prev = 1;
              nomeDoModelo = nomeDoModelo.charAt(0).toUpperCase() + nomeDoModelo.slice(1);

              if (database[nomeDoModelo]) {
                _context13.next = 5;
                break;
              }

              return _context13.abrupt("return", res.status(404).json({
                error: 'Model not found.'
              }));

            case 5:
              _context13.next = 7;
              return regeneratorRuntime.awrap(database[nomeDoModelo].findOne({
                paranoid: false,
                where: {
                  id: Number(consultaId)
                }
              }));

            case 7:
              resultado = _context13.sent;

              if (resultado) {
                _context13.next = 10;
                break;
              }

              return _context13.abrupt("return", res.status(404).json({
                error: 'Data not found.'
              }));

            case 10:
              return _context13.abrupt("return", res.status(200).json({
                resultado: resultado
              }));

            case 13:
              _context13.prev = 13;
              _context13.t0 = _context13["catch"](1);
              return _context13.abrupt("return", res.status(500).json({
                error: _context13.t0.message
              }));

            case 16:
            case "end":
              return _context13.stop();
          }
        }
      }, null, null, [[1, 13]]);
    }
  }, {
    key: "apagaDefinitivoPessoa",
    value: function apagaDefinitivoPessoa(req, res) {
      var id;
      return regeneratorRuntime.async(function apagaDefinitivoPessoa$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              id = req.params.id;
              _context14.prev = 1;
              _context14.next = 4;
              return regeneratorRuntime.awrap(database.Pessoas.destroy({
                where: {
                  id: Number(id)
                },
                force: true
              }));

            case 4:
              return _context14.abrupt("return", res.status(200).json({
                mensagem: "Id ".concat(id, " permanently deleted.")
              }));

            case 7:
              _context14.prev = 7;
              _context14.t0 = _context14["catch"](1);
              return _context14.abrupt("return", res.status(500).json(_context14.t0.message));

            case 10:
            case "end":
              return _context14.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }
  }, {
    key: "apagaDefinitivoMatricula",
    value: function apagaDefinitivoMatricula(req, res) {
      var _req$params7, estudanteId, matriculaId;

      return regeneratorRuntime.async(function apagaDefinitivoMatricula$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _req$params7 = req.params, estudanteId = _req$params7.estudanteId, matriculaId = _req$params7.matriculaId;
              _context15.prev = 1;
              _context15.next = 4;
              return regeneratorRuntime.awrap(database.Matriculas.destroy({
                where: {
                  id: Number(matriculaId)
                },
                force: true
              }));

            case 4:
              return _context15.abrupt("return", res.status(200).json({
                mensagem: "Registration ".concat(matriculaId, " from student ").concat(estudanteId, " permanently deleted.")
              }));

            case 7:
              _context15.prev = 7;
              _context15.t0 = _context15["catch"](1);
              return _context15.abrupt("return", res.status(500).json(_context15.t0.message));

            case 10:
            case "end":
              return _context15.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }
  }]);

  return PessoaController;
}();

module.exports = PessoaController;