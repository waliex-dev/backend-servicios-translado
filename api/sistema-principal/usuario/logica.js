const models = require('../../../database').models

const crearUsuarioDB = async(usuario) => {
    let respuesta = await models.usuarios.create(usuario)
    return respuesta
}

const actualizarUsuarioDB =async(id,usuario) => {
    let respuesta = await models.usuarios.update(usuario,{where:{id}})
    return respuesta
}

const consultarUsuarioDB = async(id) => {
    let respuesta = await models.usuarios.findOne({
        attributes:{exclude:['password']},
        where:{id}})
    return respuesta
}

const consultarUsuariosActivosDB = async() => {
    let respuesta = await models.usuarios.findAll({
        attributes:{exclude:['password']},
        where:{estado:1}})
    return respuesta
}

const consultarUsuariosInactivosDB = async() => {
    let respuesta = await models.usuarios.findAll({
        attributes:{exclude:['password']},
        where:{estado:0}})
    return respuesta
}

const cambiarEstadoUsuarioDB = async(id,estado) => {
    let respuesta = await models.usuarios.update({estado},{where:{id}})
    return respuesta
}

module.exports = {
    crearUsuarioDB,
    actualizarUsuarioDB,
    consultarUsuarioDB,
    consultarUsuariosActivosDB,
    consultarUsuariosInactivosDB,
    cambiarEstadoUsuarioDB
}