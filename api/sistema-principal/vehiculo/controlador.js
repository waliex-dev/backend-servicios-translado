const logicaDB = require('./logica')
const Schema = require('./schema')

const crearVehiculo = async(req,res) => {
    let vehiculo =  req.body
    try {
        await Schema.vehiculoSchemaCrear.validateAsync(vehiculo);
    }
    catch (err) {
        res.status(400).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
        return;
    }
    try{
        let respuesta = await logicaDB.crearVehiculoDB(vehiculo)
        return res.status(200).json({'vehiculo':respuesta})
    }catch(error){
    return res.status(500).json({error})}
}
const editarVehiculo = async(req,res) => {
    let id_vehiculo = req.params.id_vehiculo
    let vehiculo = req.body
    try {
        await Schema.vehiculoSchemaEditar.validateAsync(vehiculo);
    }
    catch (err) {
        res.status(400).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
        return;
    }
    try{
        let respuesta = await logicaDB.actualizarVehiculoDB(id_vehiculo,vehiculo)
        return res.status(200).json({'filas':respuesta})
    }catch(error){ return res.status(500).json({error})}
}
const consultarVehiculo = async(req,res) => {
    let id_vehiculo = req.params.id_vehiculo
    try{
        let respuesta = await logicaDB.consultarVehiculoDB(id_vehiculo)
        return res.status(200).json({'vehiculo':respuesta})
    }catch(error){return res.status(500).json({error})}
}
const consultarVehiculosActivos = async(req,res) => {
    try{
        let respuesta = await logicaDB.consultarVehiculoActivosDB()
        return res.status(200).json({'vehiculos':respuesta})
    }catch(error){return res.status(500).json({error})}
}
const consultarVehiculosInactivos = async(req,res) => {
    try{
        let respuesta = await logicaDB.consultarVehiculoInactivosDB()
        return res.status(200).json({'vehiculos':respuesta})
    }catch(error){return res.status(500).json({error})}
}
const cambiarEstadoVehiculo = async(req,res) => {
    let id_vehiculo = req.params.id_vehiculo
    let estado = req.body.estado
    try{
        let respuesta = await logicaDB.cambiarEstadoVehiculoDB(id_vehiculo,estado)
        return res.status(200).json({'filas':respuesta})
    }catch(error){return res.status(500).json({error})}
}
module.exports = {
    crearVehiculo,
    editarVehiculo,
    consultarVehiculo,
    consultarVehiculosActivos,
    consultarVehiculosInactivos,
    cambiarEstadoVehiculo
}