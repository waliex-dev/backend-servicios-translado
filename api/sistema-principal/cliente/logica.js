const models = require('../../../database').models

const crearClienteDB = async(cliente) => {
    let respuesta = await models.clientes.create(cliente)
    return respuesta
}

const actualizarClienteDB = async(id,cliente) => {
    let respuesta = await models.clientes.update(cliente,{where:{id}})
    return respuesta
}

const consultarClienteDB = async(id) => {
    let respuesta = await models.clientes.findOne({where:{id}})
    return respuesta
}

const consultarClientesActivosDB = async() => {
    let respuesta = await models.clientes.findAll({where:{estado:1}})
    return respuesta
}

const consultarClientesInactivosDB = async() => {
    let respuesta = await models.clientes.findAll({where:{estado:0}})
    return respuesta
}

const cambiarEstadoClienteDB = async(id,estado) => {
    let respuesta = await models.clientes.update({estado},{where:{id}})
    return respuesta
}

module.exports = {
    crearClienteDB,
    actualizarClienteDB,
    consultarClienteDB,
    consultarClientesActivosDB,
    consultarClientesInactivosDB,
    cambiarEstadoClienteDB
}