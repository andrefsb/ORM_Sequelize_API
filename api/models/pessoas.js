'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {

    static associate(models) {
      Pessoas.hasMany(models.Turmas,{
        foreignKey: 'docente_id'
      })
      Pessoas.hasMany(models.Matriculas,{
        foreignKey: 'estudante_id',
        scope: { status: 'confirmado'},
        as: 'aulasMatriculadas'
      })
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate:{
        funcaoValidadora: function(dado){
          if(dado.length < 3) throw new Error('Name field must be at least 3 characters.')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid data for e-mail.'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true,
    defaultScope:{
      where: {ativo: true}
    },
    scopes: {
      todos: { where: {} }
    }
  });
  return Pessoas;
};