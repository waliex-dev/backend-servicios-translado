const models = require('../../../database').models

const crearDatoBancarioDB = async(dato_bancario) => {
    let respuesta = await models.datos_bancarios.create(dato_bancario)
    return respuesta
}
const actualizarDatoBancarioDB = async(id,dato_bancario) => {
    let respuesta = await models.datos_bancarios.update(dato_bancario,{where:{id}})
    return respuesta
}

const consultarDatoBancarioDB = async(id) => {
    let respuesta = await models.datos_bancarios.findOne({where:{id}})
    return respuesta
}
const consultarDatosBancariosDB = async() => {
    let respuesta = await models.datos_bancarios.findAll()
    return respuesta
}
const consultarDatosBancariosChoferDB = async(chofereId) => {
    let respuesta = await models.datos_bancarios.findAll({where:{chofereId}})
    return respuesta
}
module.exports = {
    crearDatoBancarioDB,
    actualizarDatoBancarioDB,
    consultarDatoBancarioDB,
    consultarDatosBancariosDB,
    consultarDatosBancariosChoferDB
}