const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js')

const Grupo = sequelize.define(name, {
  createdAt: {
    type: DataTypes.DATE,
    field: 'criado_em'
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'atualizado_em'
  }
}, {
  sequelize,
  tableName: name
});

Grupo.associate = (models)=>{
  Grupo.hasMany(models.tarefa, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'tarefas'
  });
}

module.exports = Grupo;