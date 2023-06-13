const {NiveisServices} = require ('../services')
const niveisServices = new NiveisServices()

class NivelController {
  static async pegaTodosOsNiveis(req, res){
    try {
      const todosOsNiveis = await niveisServices.pegaTodosOsRegistros()
      return res.status(200).json(todosOsNiveis)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params
    try {
      const umNivel = await niveisServices.pegaUmRegistro(id)
      return res.status(200).json(umNivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaNivel(req, res) {
    const novoNivel = req.body
    try {
      const novoNivelCriado = await database.Niveis.create(novoNivel)
      return res.status(200).json(novoNivelCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.sequelize.transaction(async transacao =>{
      await niveisServices.atualizaRegistro(novasInfos, { where: { id: Number(id) }}, {transaction: transacao})
      const nivelAtualizado = await database.Niveis.findOne( { where: { id: Number(id) }})
      return res.status(200).json(nivelAtualizado)
      })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaNivel(req, res) {
    const { id } = req.params
    try {
      await database.Niveis.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `Id ${id} successfully deleted.` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraNivel(req, res) {
    const { id } = req.params
    try {
      await database.Niveis.restore( {where: { id: Number(id) } } )
      return res.status(200).json({ mensagem: `Id ${id} successfully restored.`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaDefinitivoNivel(req, res) {
    const { id } = req.params
    try {
      await database.Niveis.destroy({ where: {
        id: Number(id)
      },
      force: true
    })
      return res.status(200).json({ mensagem: `Id ${id} permanently deleted.` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = NivelController