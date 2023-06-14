const {PessoasServices} = require ('../services')
const pessoasServices = new PessoasServices()

class PessoaController {
    static async pegaPessoasAtivas(req,res){
        try{
            const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos();
            return res.status(200).json(pessoasAtivas);
        }catch(error){
            return res.status(500).json(error.message);
        }   
    }

    static async pegaTodasAsPessoas(req,res){
        try{
            const pessoasAtivas = await pessoasServices.pegaTodosOsRegistros();
            return res.status(200).json(pessoasAtivas);
        }catch(error){
            return res.status(500).json(error.message);
        }   
    }

    static async pegaUmaPessoa(req,res){
        const { id } = req.params;
        try{
            const umaPessoa = await pessoasServices.pegaUmRegistro({id})
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
            const pessoaAtualizada= pessoasServices.pegaUmRegistro(id);
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

    static async cancelaPessoa(req, res){
        const { estudanteId } = req.params;
        try{
            await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
            return res.status(200).json({message: `Student ${estudanteId} enrollment canceled.`});
            
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;