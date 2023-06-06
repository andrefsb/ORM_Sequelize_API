"use strict";

var _require = require('express'),
    Router = _require.Router;

var PessoaController = require('../controllers/PessoaController.js');

var router = Router();
router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router["delete"]('/pessoas/:id', PessoaController.apagaPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);
router["delete"]('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula);
router["delete"]('/pessoas/:id/force', PessoaController.apagaDefinitivoPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId/apagada', PessoaController.consultaMatriculaApagado);
router.get('/:nomeDoModelo/:consultaId/apagado', PessoaController.consultaRegistroApagado);
router["delete"]('/pessoas/:estudanteId/matricula/:matriculaId/force', PessoaController.apagaDefinitivoMatricula);
module.exports = router;