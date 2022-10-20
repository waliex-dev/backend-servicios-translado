const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('linea_servicio', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    numero_guia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pagado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0:No; 1:Si\n"
    },
    total_pago: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vehiculoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vehiculos',
        key: 'id'
      }
    },
    chofereId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'choferes',
        key: 'id'
      }
    },
    servicioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'servicios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'linea_servicio',
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
        name: "fk_linea_servicio_vehiculos1_idx",
        using: "BTREE",
        fields: [
          { name: "vehiculoId" },
        ]
      },
      {
        name: "fk_linea_servicio_choferes1_idx",
        using: "BTREE",
        fields: [
          { name: "chofereId" },
        ]
      },
      {
        name: "fk_linea_servicio_Servicios1_idx",
        using: "BTREE",
        fields: [
          { name: "servicioId" },
        ]
      },
    ]
  });
};
