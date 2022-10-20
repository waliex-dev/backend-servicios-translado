const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehiculos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    patente: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    color: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    propietario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0:Externo; 1: Propietario"
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0:desactivado; 1:activado"
    }
  }, {
    sequelize,
    tableName: 'vehiculos',
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
    ]
  });
};
