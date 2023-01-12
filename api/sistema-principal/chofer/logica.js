const models = require('../../../database').models
const { Op,Sequelize } = require('sequelize')
const { search } = require('../cliente/routes')

const crearChofereDB = async(chofer) => {
    let respuesta = await models.choferes.create(chofer)
    return respuesta
}

const actualizarChoferDB = async(id,chofer) => {
    let respuesta = await models.choferes.update(chofer,{where:{id}})
    return respuesta
}

const consultarChofereDB = async(id) => {
    let respuesta = await models.choferes.findOne({
        include:{model:models.vehiculos_choferes,
                as:'vehiculos_choferes',
                include:{model:models.vehiculos,as:'vehiculo'}},
        where:{id}})
    return respuesta
}

const consultarChoferesActivosDB = async() => {
    let respuesta = await models.choferes.findAll({where:{estado:1}})
    return respuesta
}

const consultarChoferesInactivosDB = async() => {
    let respuesta = await models.choferes.findAll({where:{estado:0}})
    return respuesta
}

const cambiarEstadoChofereDB = async(id,estado) => {
    let respuesta = await models.choferes.update({estado},{where:{id}})
    return respuesta
}

const buscarChoferActivosDB = async(search) => {
    let respuesta = await models.choferes.findAll({
        where:{
            estado:1,
            [Op.or]:[
                {nacionalidad:{[Op.like]:'%'+search+'%'}},
                {rut:{[Op.like]:'%'+search+'%'}},
                {celular:{[Op.like]:'%'+search+'%'}},
                {correo:{[Op.like]:'%'+search+'%'}},
                Sequelize.where(Sequelize.fn('concat', Sequelize.col('nombre'), ' ', Sequelize.col('apellidos')),
                {
                    [Op.like]: '%' + search + '%',
                })
            ]
        }
    })
    return respuesta
}

const buscarChoferInactivosDB = async(search) => {
    let respuesta = await models.choferes.findAll({
        where:{
            estado:0,
            [Op.or]:[
                {nacionalidad:{[Op.like]:'%'+search+'%'}},
                {rut:{[Op.like]:'%'+search+'%'}},
                {celular:{[Op.like]:'%'+search+'%'}},
                {correo:{[Op.like]:'%'+search+'%'}},
                Sequelize.where(Sequelize.fn('concat', Sequelize.col('nombre'), ' ', Sequelize.col('apellidos')),
                {
                    [Op.like]: '%' + search + '%',
                })
            ]
        }
    })
    return respuesta
}

module.exports = {
    crearChofereDB,
    actualizarChoferDB,
    consultarChofereDB,
    consultarChoferesActivosDB,
    consultarChoferesInactivosDB,
    cambiarEstadoChofereDB,
    buscarChoferActivosDB,
    buscarChoferInactivosDB
}