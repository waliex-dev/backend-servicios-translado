const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('choferes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nacionalidad: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    rut: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    celular: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vehiculo_propio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0: No tiene vehiculo Propio; 1: Vehiculo propio"
    }
  }, {
    sequelize,
    tableName: 'choferes',
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
