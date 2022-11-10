const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehiculos_choferes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chofereId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'choferes',
        key: 'id'
      }
    },
    vehiculoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vehiculos',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0: No seleccionado; 1: Seleccionado"
    }
  }, {
    sequelize,
    tableName: 'vehiculos_choferes',
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
        name: "fk_choferes_has_vehiculos_vehiculos1_idx",
        using: "BTREE",
        fields: [
          { name: "vehiculoId" },
        ]
      },
      {
        name: "fk_choferes_has_vehiculos_choferes1_idx",
        using: "BTREE",
        fields: [
          { name: "chofereId" },
        ]
      },
    ]
  });
};
