const models = require('../../../database').models

const buscarUsuarioCorreoDB = async(correo) => {
    let respuesta = await models.usuarios.findOne({
        attributes: {include:['nombre','apellidos','correo','password']},
        where:{correo}})
    return respuesta
}

module.exports = {
    buscarUsuarioCorreoDB
}