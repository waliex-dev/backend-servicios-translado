const models = require('../../../database').models

const servicio_model = require('../../../database').models.servicios

const sequelize_servicio = servicio_model.sequelize

const crearServicioDB = async(servicio, lineas) => {
    try{
        await sequelize_servicio.transaction(async(t) => {
            idServicio = await models.servicios.create(servicio,{transaction:t}).then(function(x){
                return x.id
            })
            for(let index = 0; index < lineas.length; index++){
                await models.linea_servicio.create(
                    {
                        fecha: lineas[index].fecha,
                        numero_guia:lineas[index].numero_guia,
                        pagado: lineas[index].pagado,
                        total_pago: lineas[index].total_pago,
                        vehiculoId: lineas[index].vehiculoId,
                        chofereId: lineas[index].chofereId,
                        servicioId: idServicio
                    }
                    ,{transaction:t})
            }
        })
        return true
    }catch(error){
        console.log(error)
        return false
    }
}

const verServicioDB = async(id) => {
    let respuesta = await models.servicios.findOne({where:{id}})
    return respuesta
}

const verServiciosPorClienteIdDB = async(id_cliente) => {
    let respuesta = await models.servicios.findAll({where:{clienteId:id_cliente}})
    return respuesta
}

module.exports = {
    crearServicioDB,
    verServicioDB,
    verServiciosPorClienteIdDB
}