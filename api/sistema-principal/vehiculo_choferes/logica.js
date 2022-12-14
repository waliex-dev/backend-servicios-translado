const models = require('../../../database').models
const vehiculo_chofer_model =  require('../../../database').models.vehiculos_choferes
const vehiculo_model = require('../../../database').models.vehiculos
const sequelize_vehiculo = vehiculo_model.sequelize
const sequelize_vehiculoChofer = vehiculo_chofer_model.sequelize
const { Op } = require("sequelize");

const crearVehiculoChoferDB = async(vehiculo_chofer) => {
    let idVehiculoChofer;
    vehiculo_chofer.estado = 1;
    try {
        await sequelize_vehiculoChofer.transaction(async(t) => {
            idVehiculoChofer = await models.vehiculos_choferes.create(vehiculo_chofer,{transaction:t})
        })
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

const crearVehiculoYEnlazarAChoferDB = async(vehiculo,id_chofer) => {
    console.log(id_chofer)
    let vehiculo_chofer = { estado:1, chofereId:Number(id_chofer), vehiculoId:null}
    try{
        await sequelize_vehiculo.transaction(async(t) => {
            let idVehiculo = await models.vehiculos.create(vehiculo,{transaction:t}).then( function(x){
                return x.id
            })
            vehiculo_chofer.vehiculoId = idVehiculo
            console.log('datos pa',vehiculo_chofer)
            let respuesta_vehiculo_chofer = await models.vehiculos_choferes.create(vehiculo_chofer,{transaction:t})
        })
        return true
    } catch(error){
        console.log(error)
        return false
    }

}
const consultarVehiculoChoferDB  = async(vehiculo_chofer) => {
    let respuesta = await models.vehiculos_choferes.findOne({where:{chofereId:vehiculo_chofer.chofereId, vehiculoId:vehiculo_chofer.vehiculoId}})
    return respuesta
}

const actualizarVehiculoChoferDB  = async(id,vehiculo_chofer) => {
    let respuesta = await models.vehiculos_choferes.update(vehiculo_chofer,{where:{id}})
    return respuesta
}
const eliminarVehiculoChoferDB  = async(chofereId) => {
    let respuesta = await models.vehiculos_choferes.destroy({where:{chofereId}})
    return respuesta
}

const cambiarEstadoVehiculoChoferDB = async(vehiculo_chofer) => {
    let respuesta = await models.vehiculos_choferes.update({estado},{where:{chofereId:vehiculo_chofer.chofereId, vehiculoId:vehiculo_chofer.vehiculoId}})
    return respuesta
}

const consultarVehiculosChoferIdDB  = async(chofereId) => {
    let respuesta = await models.vehiculos_choferes.findAll({include:{model:models.vehiculos,as:'vehiculo'},where:{chofereId}})
    return respuesta
}

const consultarIdVehiculosChoferDB = async(chofereId) => {
    let respuesta = await models.vehiculos_choferes.findAll({where:{chofereId},raw:true}).then(enlaces => enlaces.map(enlace => enlace.vehiculoId));
    return respuesta
}

const consultarVehiculoActivosDB = async(ids) => {
    let respuesta = await models.vehiculos.findAll({where:{estado:1, id:{[Op.notIn]:ids}}})
    return respuesta
}

module.exports = {
    crearVehiculoChoferDB,
    consultarVehiculoChoferDB,
    actualizarVehiculoChoferDB,
    eliminarVehiculoChoferDB,
    consultarVehiculosChoferIdDB,
    cambiarEstadoVehiculoChoferDB,
    consultarIdVehiculosChoferDB,
    consultarVehiculoActivosDB,
    crearVehiculoYEnlazarAChoferDB
}
