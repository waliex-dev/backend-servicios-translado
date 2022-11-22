const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    monto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0:abono; 1:pago\n"
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    observacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lineaServicioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'linea_servicio',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pagos',
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
        name: "fk_pagos_linea_servicio1_idx",
        using: "BTREE",
        fields: [
          { name: "lineaServicioId" },
        ]
      },
    ]
  });
};
