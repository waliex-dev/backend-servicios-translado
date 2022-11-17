const models = require('../../../database').models

const servicio_model = require('../../../database').models.servicios

const sequelize_servicio = servicio_model.sequelize

const crearServicioDB = async(servicio, lineas) => {
    let idServicio
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
    let respuesta = await models.servicios.findOne({
        include:{model:models.linea_servicio, as:'linea_servicios',
                include:[{model:models.vehiculos, as:'vehiculo'},{model:models.choferes,as:'chofere'}]
        },
        where:{id}})
    return respuesta
}

const verServiciosPorClienteIdDB = async(id_cliente) => {
    let respuesta = await models.servicios.findAll({where:{clienteId:id_cliente}})
    return respuesta
}

const cambiarEstadoServicioDB = async(id,estado) => {
    let respuesta = await models.servicios.update({estado},{where:{id}})
    return respuesta
}

const crearLineaServicioDB = async(linea_servicio) => {
    let respuesta = await models.linea_servicio.create(linea_servicio)
    return respuesta
}

const editarLineaServicioDB = async(id,linea_servicio) => {
    let respuesta = await models.linea_servicio.update({linea_servicio},{where:{id}})
    return respuesta
}

const crearPagoDB = async(pago) => {
    let respuesta = await models.pagos.create(pago)
    return respuesta
}

const editarPagoDB = async(id,pago) => {
    let respuesta = await models.pagos.update({pago},{where:{id}})
    return respuesta
}

const obtenerVehiculosAsociadosChoferIdDB = async(id_chofer) => {
    let respuesta = await models.vehiculos_choferes.findAll({
        include:{model:models.vehiculos,as:'vehiculo'},
        where:{chofereId:id_chofer,estado:1}
    })
    return respuesta
}

module.exports = {
    crearServicioDB,
    verServicioDB,
    verServiciosPorClienteIdDB,
    cambiarEstadoServicioDB,
    crearLineaServicioDB,
    editarLineaServicioDB,
    crearPagoDB,
    editarPagoDB,
    obtenerVehiculosAsociadosChoferIdDB
}