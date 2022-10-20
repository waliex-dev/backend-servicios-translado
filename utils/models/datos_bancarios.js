const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datos_bancarios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    banco: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    rut: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipo_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0:vista; 1:cta corriente; 2: cta ahorro"
    },
    chofereId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'choferes',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'datos_bancarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_datos_bancarios_choferes1_idx",
        using: "BTREE",
        fields: [
          { name: "chofereId" },
        ]
      },
    ]
  });
};
