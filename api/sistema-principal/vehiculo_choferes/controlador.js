const logicaDB = require('./logica')
const Schema = require('./schema')

const crearVehiculoChofer = async(req,res) => {
    let vehiculo_chofer =  req.body
    console.log(vehiculo_chofer)
    try {
        await Schema.vehiculoChoferSchemaCrear.validateAsync(vehiculo_chofer);
    }
    catch (err) {
        console.log(err)
        return res.status(200).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
    }
    try{

        let respuesta = await logicaDB.crearVehiculoChoferDB(vehiculo_chofer)
        return res.status(200).json({
            'vehiculo_chofer':respuesta,
            "vinculado":true,
            "mensaje": "Vehículo vinculado con exito"
        })

    }catch(error){
        console.log(error)
    return res.status(500).json({error})}
}

const crearVehiculoYEnlazarAChofer = async(req,res) => {
    let id_chofer = req.params.id_chofer
    let vehiculo = req.body
    try {
        await Schema.vehiculoSchemaCrear.validateAsync(vehiculo);
    }
    catch (err) {
        console.log(err)
        return res.status(200).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
    }
    try{
        let respuesta = await logicaDB.crearVehiculoYEnlazarAChoferDB(vehiculo,id_chofer)
        return res.status(200).json({
            'vehiculo_chofer':respuesta,
            "vinculado":true,
            "mensaje": "Vehículo creado y vinculado con exito"
        })
    }catch(error){
        console.log(error)
    return res.status(500).json({error})}
}

const eliminarVehiculoChofer = async(req,res) => {
    let id_vehiculo_chofer = req.params.id_vehiculo_chofer
    try{
        let respuesta = await logicaDB.eliminarVehiculoChoferDB(id_vehiculo_chofer)
        return res.status(200).json({'filas':respuesta})
    }catch(error){
        console.log(error)
        return res.status(500).json({error})}
}
const consultarvehiculoChoferPorIdChofer = async(req,res) => {
    let id_chofer = req.params.id_chofer
    try{
        let respuesta = await logicaDB.consultarVehiculosChoferIdDB(id_chofer)
        let respuesta_id_vehiculos = await logicaDB.consultarIdVehiculosChoferDB(id_chofer)
        let respuesta_vehiculos_no_asociados = await logicaDB.consultarVehiculoActivosDB(respuesta_id_vehiculos)
        return res.status(200).json({'vehiculos_chofer':respuesta,'vehiculos':respuesta_vehiculos_no_asociados})
    }catch(error){return res.status(500).json({error})}
}
module.exports = {
    crearVehiculoChofer,
    crearVehiculoYEnlazarAChofer,
    eliminarVehiculoChofer,
    consultarvehiculoChoferPorIdChofer
}