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
        let respuesta_existe = await logicaDB.consultarVehiculoChoferDB(vehiculo_chofer)
        console.log(respuesta_existe)
        if(respuesta_existe){
            return res.status(200).json({
                'vehiculo_chofer':respuesta_existe,
                "vinculado":true,
                "mensaje": "Vehiculo ya esta vinculado"
            })
        }else{
            let respuesta = await logicaDB.crearVehiculoChoferDB(vehiculo_chofer)
            return res.status(200).json({
                'vehiculo_chofer':respuesta,
                "vinculado":true,
                "mensaje": "Vehiculo vinculado con exito"
            })
        }
        
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
        let respuesta = await logicaDB.consultarVehiculoChoferPorIdChoferDB(id_chofer)
        return res.status(200).json({'vehiculo_chofer':respuesta})
    }catch(error){return res.status(500).json({error})}
}
module.exports = {
    crearVehiculoChofer,
    eliminarVehiculoChofer,
    consultarvehiculoChoferPorIdChofer
}