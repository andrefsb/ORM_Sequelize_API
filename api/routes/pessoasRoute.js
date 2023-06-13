const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router();

router
.get('/pessoas', PessoaController.pegaPessoasAtivas)
.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
.get('/pessoas/:estudanteId/matricula/:matriculaId/apagada', PessoaController.consultaMatriculaApagado)
.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
.get('/:nomeDoModelo/:consultaId/apagado', PessoaController.consultaRegistroApagado)
.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
.post('/pessoas', PessoaController.criaPessoa)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
.put('/pessoas/:id', PessoaController.atualizaPessoa)
.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
.delete('/pessoas/:id', PessoaController.apagaPessoa)
.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)
.delete('/pessoas/:id/force', PessoaController.apagaDefinitivoPessoa)
.delete('/pessoas/:estudanteId/matricula/:matriculaId/force', PessoaController.apagaDefinitivoMatricula)

module.exports = router;