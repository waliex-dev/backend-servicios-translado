const models = require('../../../database').models

const servicio_model = require('../../../database').models.servicios
const { Op } = require("sequelize");

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

const crearServicioOtrosDB = async(servicio) => {
    let respuesta = await models.servicios.create(servicio)
    return respuesta
}

const verServicioDB = async(id) => {
    let respuesta = await models.servicios.findOne({
        include:[{model:models.linea_servicio, as:'linea_servicios',
                include:[{model:models.vehiculos, as:'vehiculo'},{model:models.choferes,as:'chofere'},{model:models.pagos,as:'pagos'}]
        },{model:models.clientes, as:'cliente'},{model:models.usuarios,as:'usuario'}],
        where:{id}})
    return respuesta
}

const verServicioOtrosDB = async(id) => {
    let respuesta = await models.servicios.findOne({
        include:[{model:models.clientes, as:'cliente'},{model:models.usuarios,as:'usuario'}],
        where:{id}})
    return respuesta
}

const obtenerIngresosDB = async(servicioId) => {
    let respuesta = await models.ingresos.findAll({where:{servicioId}})
    return respuesta
}

const obtenerEgresosDB = async(servicioId) => {
    let respuesta = await models.egresos.findAll({where:{servicioId}})
    return respuesta
}

const obtenerAdelantosDB = async(servicioId) => {
    let respuesta = await models.adelantos.findAll({where:{servicioId}})
    return respuesta
}


const verServiciosPorClienteIdDB = async(id_cliente,estado) => {
    let respuesta = await models.servicios.findAll({where:{clienteId:id_cliente,estado}})
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

const eliminarLineaServicioDB = async(id) => {
    let respuesta = await models.linea_servicio.destroy({where:{id}})
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

const eliminarPagoDB = async(id) => {
    let respuesta = await models.pagos.destroy({where:{id}})
    return respuesta
}

const obtenerPagosDB = async(id_linea_servicio) => {
    let respuesta = await models.pagos.findAll({where:{lineaServicioId:id_linea_servicio}})
    return respuesta
}

const obtenerVehiculosAsociadosChoferIdDB = async(id_chofer) => {
    let respuesta = await models.vehiculos_choferes.findAll({
        include:{model:models.vehiculos,as:'vehiculo'},
        where:{chofereId:id_chofer,estado:1}
    })
    return respuesta
}

const crearIngresoDB = async(ingreso) => {
    let respuesta = await models.ingresos.create(ingreso)
    return respuesta
}

const editarIngresoDB = async(id,ingreso) => {
    let respuesta = await models.ingresos.update(ingreso,{where:{id}})
    return respuesta
}

const eliminarIngresoDB = async(id) => {
    let respuesta = await models.ingresos.destroy({where:{id}})
    return respuesta
}

const crearEgresoDB = async(egreso) => {
    let respuesta = await models.egresos.create(egreso)
    return respuesta
}

const editarEgresoDB = async(id,egreso) => {
    let respuesta = await models.egresos.update(egreso,{where:{id}})
    return respuesta
}

const eliminarEgresoDB = async(id) => {
    let respuesta = await models.egresos.destroy({where:{id}})
    return respuesta
}

const crearAdelantoDB = async(adelanto) => {
    let respuesta = await models.adelantos.create(adelanto)
    return respuesta
}

const editarAdelantoDB = async(id,adelanto) => {
    let respuesta = await models.adelantos.update(adelanto,{where:{id}})
    return respuesta
}

const eliminarAdelantoDB = async(id) => {
    let respuesta = await models.adelantos.destroy({where:{id}})
    return respuesta
}

const editarServicioDB = async(id, servicio) => {
    let respuesta = await models.servicios.update(servicio,{where:{id}})
    return respuesta
}

const filtrarIngresosDB = async(servicioId,fecha_inicio, fecha_fin) => {
    let respuesta = await models.ingresos.findAll({
        where:{
            fecha:{[Op.between]:[fecha_inicio,fecha_fin]},
            servicioId
        }
    })
    return respuesta
}

const filtrarEgresosDB = async(servicioId,fecha_inicio, fecha_fin) => {
    let respuesta = await models.egresos.findAll({
        where:{
            fecha:{[Op.between]:[fecha_inicio,fecha_fin]},
            servicioId
        }
    })
    return respuesta
}

const filtrarAdelantosDB = async(servicioId,fecha_inicio, fecha_fin) => {
    let respuesta = await models.adelantos.findAll({
        where:{
            fecha:{[Op.between]:[fecha_inicio,fecha_fin]},
            servicioId
        }
    })
    return respuesta
}

module.exports = {
    crearServicioDB,
    crearServicioOtrosDB,
    verServicioDB,
    verServicioOtrosDB,
    verServiciosPorClienteIdDB,
    cambiarEstadoServicioDB,
    crearLineaServicioDB,
    editarLineaServicioDB,
    eliminarLineaServicioDB,
    crearPagoDB,
    editarPagoDB,
    eliminarPagoDB,
    obtenerPagosDB,
    obtenerVehiculosAsociadosChoferIdDB,
    crearIngresoDB,
    editarIngresoDB,
    eliminarIngresoDB,
    crearEgresoDB,
    editarEgresoDB,
    eliminarEgresoDB,
    crearAdelantoDB,
    editarAdelantoDB,
    eliminarAdelantoDB,
    editarServicioDB,
    obtenerIngresosDB,
    obtenerEgresosDB,
    obtenerAdelantosDB,
    filtrarIngresosDB,
    filtrarEgresosDB,
    filtrarAdelantosDB
}