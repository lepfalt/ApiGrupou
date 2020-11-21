const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js')

const Aluno = sequelize.define(name, {
  matricula: {
    type: DataTypes.STRING(10)
  }
}, {
  sequelize,
  tableName: name,
  timestamps:false
});

Aluno.associate = (models)=>{
  Aluno.belongsTo(models.usuario, {
    foreignKey: {
      name: 'id_usuario'
    },
    as: 'usuario'
  }); //relacao 1 pra 1

  Aluno.belongsToMany(models.hardskill, {
    through: 'aluno_hardskill',
    timestamps: false,
    foreignKey: {
      name: 'id_aluno',
    },
    as: 'hardskills'
  });
}

module.exports = Aluno;