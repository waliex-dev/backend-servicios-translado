var DataTypes = require("sequelize").DataTypes;
var _choferes = require("./choferes");
var _clientes = require("./clientes");
var _datos_bancarios = require("./datos_bancarios");
var _linea_servicio = require("./linea_servicio");
var _pagos = require("./pagos");
var _servicios = require("./servicios");
var _usuarios = require("./usuarios");
var _vehiculos = require("./vehiculos");
var _vehiculos_choferes = require("./vehiculos_choferes");

function initModels(sequelize) {
  var choferes = _choferes(sequelize, DataTypes);
  var clientes = _clientes(sequelize, DataTypes);
  var datos_bancarios = _datos_bancarios(sequelize, DataTypes);
  var linea_servicio = _linea_servicio(sequelize, DataTypes);
  var pagos = _pagos(sequelize, DataTypes);
  var servicios = _servicios(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var vehiculos = _vehiculos(sequelize, DataTypes);
  var vehiculos_choferes = _vehiculos_choferes(sequelize, DataTypes);

  datos_bancarios.belongsTo(choferes, { as: "chofere", foreignKey: "chofereId"});
  choferes.hasMany(datos_bancarios, { as: "datos_bancarios", foreignKey: "chofereId"});
  linea_servicio.belongsTo(choferes, { as: "chofere", foreignKey: "chofereId"});
  choferes.hasMany(linea_servicio, { as: "linea_servicios", foreignKey: "chofereId"});
  vehiculos_choferes.belongsTo(choferes, { as: "chofere", foreignKey: "chofereId"});
  choferes.hasMany(vehiculos_choferes, { as: "vehiculos_choferes", foreignKey: "chofereId"});
  servicios.belongsTo(clientes, { as: "cliente", foreignKey: "clienteId"});
  clientes.hasMany(servicios, { as: "servicios", foreignKey: "clienteId"});
  pagos.belongsTo(linea_servicio, { as: "lineaServicio", foreignKey: "lineaServicioId"});
  linea_servicio.hasMany(pagos, { as: "pagos", foreignKey: "lineaServicioId"});
  linea_servicio.belongsTo(servicios, { as: "servicio", foreignKey: "servicioId"});
  servicios.hasMany(linea_servicio, { as: "linea_servicios", foreignKey: "servicioId"});
  servicios.belongsTo(usuarios, { as: "usuario", foreignKey: "usuarioId"});
  usuarios.hasMany(servicios, { as: "servicios", foreignKey: "usuarioId"});
  linea_servicio.belongsTo(vehiculos, { as: "vehiculo", foreignKey: "vehiculoId"});
  vehiculos.hasMany(linea_servicio, { as: "linea_servicios", foreignKey: "vehiculoId"});
  vehiculos_choferes.belongsTo(vehiculos, { as: "vehiculo", foreignKey: "vehiculoId"});
  vehiculos.hasMany(vehiculos_choferes, { as: "vehiculos_choferes", foreignKey: "vehiculoId"});

  return {
    choferes,
    clientes,
    datos_bancarios,
    linea_servicio,
    pagos,
    servicios,
    usuarios,
    vehiculos,
    vehiculos_choferes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
