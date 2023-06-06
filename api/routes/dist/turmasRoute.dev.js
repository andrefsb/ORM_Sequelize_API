"use strict";

var _require = require('express'),
    Router = _require.Router;

var TurmaController = require('../controllers/TurmaController');

var router = Router();
router.get('/turmas', TurmaController.pegaTodasAsTurmas).get('/turmas/:id', TurmaController.pegaUmaTurma).post('/turmas', TurmaController.criaTurma).put('/turmas/:id', TurmaController.atualizaTurma)["delete"]('/turmas/:id', TurmaController.apagaTurma).post('/turmas/:id/restaura', TurmaController.restauraTurma);
module.exports = router;