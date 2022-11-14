const models = require('../../../database').models
const vehiculo_chofer_model =  require('../../../database').models.vehiculos_choferes
const sequelize_vehiculoChofer = vehiculo_chofer_model.sequelize

const crearVehiculoChoferDB = async(vehiculo_chofer) => {
    let idVehiculoChofer;
    let estado = 0;
    vehiculo_chofer.estado = 1;
    try {
        await sequelize_vehiculoChofer.transaction(async(t) => {
            idVehiculoChofer = await models.vehiculos_choferes.create(vehiculo_chofer,{transaction:t}).then( function (x){
                return x.id;
            })
            let respuesta_vehiculos_chofere = await consultarVehiculosChoferIdDB(vehiculo_chofer.chofereId);
            console.log("imrpesion chofer vheiculo")
            console.log(respuesta_vehiculos_chofere)
            if(respuesta_vehiculos_chofere != null){
                for(let index = 0; index < respuesta_vehiculos_chofere.length; index++){
                    await models.vehiculos_choferes.update(
                        {estado},
                        {where:{chofereId:vehiculo_chofer.chofereId,estado:1},transaction:t}
                        )
                }
            }
        })
        return true;
    } catch (error) {
        console.log(error)
        return false;
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
const consultarVehiculosChoferIdDB  = async(chofereId) => {
    let respuesta = await models.vehiculos_choferes.findAll({where:{chofereId}})
    return respuesta
}


const cambiarEstadoVehiculoChoferDB = async(vehiculo_chofer) => {
    let respuesta = await models.vehiculos_choferes.update({estado},{where:{chofereId:vehiculo_chofer.chofereId, vehiculoId:vehiculo_chofer.vehiculoId}})
    return respuesta
}
module.exports = {
    crearVehiculoChoferDB,
    consultarVehiculoChoferDB,
    actualizarVehiculoChoferDB,
    eliminarVehiculoChoferDB,
    consultarVehiculosChoferIdDB,
    cambiarEstadoVehiculoChoferDB

}
