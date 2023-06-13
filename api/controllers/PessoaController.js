const database = require('../models')
const Sequelize = require ('sequelize')

class PessoaController {
    static async pegaPessoasAtivas(req,res){
        try{
            const pessoasAtivas = await database.Pessoas.findAll();
            return res.status(200).json(pessoasAtivas);
        }catch(error){
            return res.status(500).json(error.message);
        }   
    }

    static async pegaTodasAsPessoas(req,res){
        try{
            const pessoasAtivas = await database.Pessoas.scope('todos').findAll();
            return res.status(200).json(pessoasAtivas);
        }catch(error){
            return res.status(500).json(error.message);
        }   
    }

    static async pegaUmaPessoa(req,res){
        const { id } = req.params;
        try{
            const umaPessoa = await database.Pessoas.findOne({
                where: { 
                    id : Number(id) 
                }
            })
            return res.status(200).json(umaPessoa);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async criaPessoa(req,res){
        const novaPessoa = req.body;
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async atualizaPessoa(req,res){
        const { id } = req.params;
        const novasInfos = req.body;
        try{
            database.sequelize.transaction(async transacao =>{
            await database.Pessoas.update(novasInfos,{where: {id : Number(id)}}, {transaction: transacao});
            const pessoaAtualizada= await database.Pessoas.findOne({where: {id : Number(id)}});
            return res.status(200).json(pessoaAtualizada);
            })
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagaPessoa(req,res){
        const { id } = req.params;
        try{
            database.sequelize.transaction(async transacao =>{
            await database.Pessoas.destroy({where: {id : Number(id)}}, {transaction: transacao});
            return res.status(200).json({mensagem: `Id ${id} successfully deleted.`});
            })
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async restauraPessoa(req,res){
        const { id } = req.params;
        try{
            await database.Pessoas.restore({where: {id : Number(id)}});
            return res.status(200).json({mensagem: `Id ${id} successfully restored.`});
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaMatricula(req,res){
        const { estudanteId, matriculaId } = req.params;
        try{
            const umaMatricula = await database.Matriculas.findOne({
                where: { 
                    id : Number(matriculaId),
                    estudante_id : Number(estudanteId) 
                }
            })
            return res.status(200).json(umaMatricula);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async criaMatricula(req,res){
        const { estudanteId } = req.params;
        const novaMatricula= { ...req.body, estudante_id: Number(estudanteId)};
        try{
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async atualizaMatricula(req,res){
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body;
        try{
            database.sequelize.transaction(async transacao =>{
            await database.Matriculas.update(novasInfos,{
                where: {
                    id : Number(matriculaId),
                    estudante_id: Number (estudanteId)
                }
            },{transaction: transacao});
            const matriculaAtualizada= await database.Matriculas.findOne({where: {id : Number(matriculaId)}});
            return res.status(200).json(matriculaAtualizada);
        })
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagaMatricula(req,res){
        const { estudanteId, matriculaId } = req.params;
        try{
            database.sequelize.transaction(async transacao =>{
            await database.Matriculas.destroy({where: {id : Number(matriculaId)}},{transaction: transacao});
            return res.status(200).json({mensagem: `Registration ${matriculaId} from student ${estudanteId} successfully deleted.`});
            })
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async consultaMatriculaApagado(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
          const resultado = await database.Matriculas.findOne({
            paranoid: false,
            where: { 
                id : Number(matriculaId),
                estudante_id : Number(estudanteId) 
            }
          });
          return res.status(200).json({resultado})
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
        database.sequelize.transaction(async transacao =>{
          await database.Matriculas.restore({
            where: {
              id: Number(matriculaId),
              estudante_id: Number(estudanteId)
            }
          },{transaction: transacao})
          return res.status(200).json({mensagem: `Id ${matriculaId} from ${estudanteId} successfully restored.`})
            })
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    static async consultaRegistroApagado(req, res) {
        let { nomeDoModelo, consultaId } = req.params;
        try {
          nomeDoModelo = nomeDoModelo.charAt(0).toUpperCase() + nomeDoModelo.slice(1);
      
          if (!database[nomeDoModelo]) {
            return res.status(404).json({ error: 'Model not found.' });
          }
      
          const resultado = await database[nomeDoModelo].findOne({
            paranoid: false,
            where: { id: Number(consultaId) }
          });
      
          if (!resultado) {
            return res.status(404).json({ error: 'Data not found.' });
          }
      
          return res.status(200).json({ resultado });
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
    }

    static async apagaDefinitivoPessoa(req,res){
        const { id } = req.params;
        try{
            database.sequelize.transaction(async transacao =>{
            await database.Pessoas.destroy({ where: {
                id: Number(id)
              },
              force: true
            },{transaction: transacao});
            return res.status(200).json({mensagem: `Id ${id} permanently deleted.`});
        })
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagaDefinitivoMatricula(req,res){
        const { estudanteId, matriculaId } = req.params;
        try{
            database.sequelize.transaction(async transacao =>{
            await database.Matriculas.destroy({ where: {
                id: Number(matriculaId)
              },
              force: true
            },{transaction: transacao});
            return res.status(200).json({mensagem: `Registration ${matriculaId} from student ${estudanteId} permanently deleted.`});
            })
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaMatriculas(req, res){
        const { estudanteId } = req.params;
        try{
            const pessoa = await database.Pessoas.findOne({ where: {id: Number(estudanteId)}});
            const matriculas =  await pessoa.getAulasMatriculadas();
            return res.status(200).json(matriculas);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaMatriculasPorTurma(req, res){
        const { turmaId } = req.params;
        try{
            const todasAsMatriculas = await database.Matriculas.findAndCountAll({ 
                where: {
                    turma_id: Number(turmaId),
                    status: 'confirmado'
                },
                limit: 20,
                order: [['estudante_id', 'ASC']]
            });
            return res.status(200).json(todasAsMatriculas);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaTurmasLotadas(req, res){
        const lotacaoTurma = 2;
        try{
            const turmasLotadas = await database.Matriculas.findAndCountAll({ 
                where: {
                    status: 'confirmado'
                },
                attributes: ['turma_id'],
                group: ['turma_id'],
                having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
            });
            return res.status(200).json(turmasLotadas.count);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async cancelaPessoa(req, res){
        const { estudanteId } = req.params;
        try{
            database.sequelize.transaction(async transacao =>{
                await database.Pessoas.update({ ativo: false }, {where: {id: Number(estudanteId) }}, {transaction: transacao});
                await database.Matriculas.update({ status: 'cancelado' }, {where: {estudante_id: Number(estudanteId)}}, {transaction: transacao});
    
                return res.status(200).json({message: `Student ${estudanteId} enrollment canceled.`});
            })
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;