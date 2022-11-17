const logicaDB = require('./logica')
const Schema = require('./schema')

const crearServicio = async(req,res) => {
    let servicio = req.body.servicio
    let lineas_servicio = req.body.lineas_servicio
    try {
        await Schema.servicioSchemaCrear.validateAsync(servicio);
    }
    catch (err) {
        res.status(400).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
        return;
    }
    for(let index = 0; index < lineas_servicio.length; index++){
        try {
            await Schema.lineaServicioSchemaCrearArray.validateAsync(lineas_servicio[index]);
        }
        catch (err) {
            res.status(400).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
            return;
        }
    }
    try{
        let respuesta = await logicaDB.crearServicioDB(servicio,lineas_servicio)
        return res.status(200).json({
            'servicio':respuesta,
            "creado":true,
            "mensaje": "Servicio creado con exito"
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({error})
    }
}

const verServicio = async(req,res) => {
    let id_servicio = req.params.id
    try{
        let respuesta = await logicaDB.verServicioDB(id_servicio)
        return res.status(200).json({'servicio':respuesta})
    }catch(error){
        return res.status(500).json({error})
    }
}

const verServiciosPorClienteId = async(req,res) => {
    let id_cliente = req.params.id_cliente
    try{
        let respuesta = await logicaDB.verServiciosPorClienteIdDB(id_cliente)
        return res.status(200).json({'servicios':respuesta})
    }catch(error){
        return res.status(500).json({error})
    }
}

const cambiarEstadoServicio = async(req,res) => {
    let id = req.params.id
    let estado = req.body
    try{
        let respuesta = await logicaDB.cambiarEstadoServicioDB(id,estado)
        return res.status(200).json({'filas':respuesta})
    }catch(error){
        return res.status(500).json({error})
    }
}
const crearLineaServicio = async(req,res) => {
    let linea_servicio = req.body
    try {
        await Schema.lineaServicioSchemaCrearIndividual.validateAsync(linea_servicio);
    }
    catch (err) {
        res.status(400).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
        return;
    }
    try{
        let respuesta = await logicaDB.crearLineaServicioDB(linea_servicio)
        return res.status(200).json({'linea_servicio':respuesta})
    }catch(error){
        return res.status(500).json({error})
    }
}

const editarLineaServicio = async(req,res) => {
    let id = req.params.id_linea_servicio
    let linea_servicio = req.body
    try{
        let respuesta = await logicaDB.editarLineaServicioDB(id,linea_servicio)
        return res.status(200).json({'filas':respuesta})
    }catch(error){
        return res.status(500).json({error})
    }
}

const crearPago = async(req,res) => {
    let pago = req.body
    try{
        let respuesta = await logicaDB.crearPagoDB(pago)
        return res.status(200).json({'pago':respuesta})
    }catch(error){
        return res.status(500).json({error})
    }
}

const editarPago = async(req,res) => {
    let id = req.params.id_pago
    let pago = req.body
    try{
        let respuesta = await logicaDB.editarPagoDB(id,pago)
        return res.status(200).json({'filas':respuesta})
    }catch(error){
        return res.status(500).json({error})
    }
}

const obtenerVehiculosAsociadosChoferId = async(req,res) => {
    let id_chofer = req.params.id_chofer
    try{
        let respuesta = await logicaDB.obtenerVehiculosAsociadosChoferIdDB(id_chofer)
        return res.status(200).json({'vehiculos_asociados':respuesta})
    }catch(error){
        return res.status(500).json({error})
    }
}

module.exports = {
    crearServicio,
    verServicio,
    verServiciosPorClienteId,
    cambiarEstadoServicio,
    crearLineaServicio,
    editarLineaServicio,
    crearPago,
    editarPago,
    obtenerVehiculosAsociadosChoferId
}