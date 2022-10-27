const models = require('../../../database').models

const crearVehiculoDB = async(vehiculo) => {
    let respuesta = await models.vehiculos.create(vehiculo)
    return respuesta
}
const actualizarVehiculoDB = async(id,vehiculo) => {
    let respuesta = await models.vehiculos.update(vehiculo,{where:{id}})
    return respuesta
}
const consultarVehiculoDB = async(id) => {
    let respuesta = await models.vehiculos.findOne({where:{id}})
    return respuesta
}
const consultarVehiculoActivosDB = async() => {
    let respuesta = await models.vehiculos.findAll({where:{estado:1}})
    return respuesta
}
const consultarVehiculoInactivosDB = async() => {
    let respuesta = await models.vehiculos.findAll({where:{estado:0}})
    return respuesta
}
const cambiarEstadoVehiculoDB = async(id,estado) => {
    let respuesta = await models.vehiculos.update({estado},{where:{id}})
    return respuesta
}
module.exports = {
    crearVehiculoDB,
    actualizarVehiculoDB,
    consultarVehiculoDB,
    consultarVehiculoActivosDB,
    consultarVehiculoInactivosDB,
    cambiarEstadoVehiculoDB
}