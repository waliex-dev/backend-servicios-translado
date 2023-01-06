const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0:cancelado; 1:en proceso; 2:terminado"
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0:embarque; 1:traslado"
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    moneda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0:CLP; 1:Dolar; 2:Soles"
    },
    valor_clp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Total Clp en caso de ser otro tipo de moneda de pago"
    },
    valor_cambio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Valor a cuanto cambio"
    },
    tipo_servicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0:transporte ; 1:otros"
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'id'
      }
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'servicios',
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
        name: "fk_Servicios_clientes_idx",
        using: "BTREE",
        fields: [
          { name: "clienteId" },
        ]
      },
      {
        name: "fk_servicios_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "usuarioId" },
        ]
      },
    ]
  });
};
