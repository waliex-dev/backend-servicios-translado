const logicaDB = require('./logica')
const Schema = require('./schema')

const crearChofer = async(req,res) => {
    let chofer =  req.body;
    console.log(chofer)
    try {
        await Schema.choferSchemaCrear.validateAsync(chofer);
    }
    catch (err) {
        console.log(err)
        res.status(400).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
        return;
    }
    try{
        let respuesta = await logicaDB.crearChofereDB(chofer);
        return res.status(200).json({'chofer':respuesta});
    }catch(error){
        console.log(error)
        return res.status(500).json({error})
    }
}

const editarChofer = async(req,res) => {
    let id_chofer = req.params.id_chofer;
    let chofer = req.body;
    try {
        await Schema.choferSchemaEditar.validateAsync(chofer);
    }
    catch (err) {
        res.status(400).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
        return;
    }
    try{
        let respuesta = await logicaDB.actualizarChoferDB(id_chofer,chofer);
        return res.status(200).json({'filas':respuesta})
    }catch(error){
        console.log(error)
        return res.status(500).json({error})
    }
}

const consultarChofer = async(req,res) => {
    let id_chofer = req.params.id_chofer
    try{
        let respuesta = await logicaDB.consultarChofereDB(id_chofer)
        return res.status(200).json({'chofer':respuesta})
    }catch(error){return res.status(500).json({error})}
}

const consultarChoferesActivos = async(req,res) => {
    try{
        let respuesta = await logicaDB.consultarChoferesActivosDB()
        return res.status(200).json({'choferes':respuesta})
    }catch(error){return res.status(500).json({error})}
}

const consultarChoferesInactivos = async(req,res) => {
    try{
        let respuesta = await logicaDB.consultarChoferesInactivosDB()
        return res.status(200).json({'choferes':respuesta})
    }catch(error){return res.status(500).json({error})}
}

const cambiarEstadoChofer = async(req,res) => {
    let id_chofer = req.params.id_chofer
    let estado = req.body.estado
    console.log(estado)
    try{
        let respuesta = await logicaDB.cambiarEstadoChofereDB(id_chofer,estado)
        return res.status(200).json({'filas':respuesta})
    }catch(error){return res.status(500).json({error})}
}

module.exports = {
    crearChofer,
    editarChofer,
    consultarChofer,
    consultarChoferesActivos,
    consultarChoferesInactivos,
    cambiarEstadoChofer
}