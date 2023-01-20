const logicaDB = require('./logica')
const Schema = require('./schema')

const crearDatoBancario = async(req,res) => {
    let dato_bancario =  req.body
    try {
        await Schema.dato_bancarioSchemaCrear.validateAsync(dato_bancario);
    }
    catch (err) {
        console.log(err)
        res.status(400).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
        return;
    }
    try{
        let respuesta = await logicaDB.crearDatoBancarioDB(dato_bancario)
        return res.status(200).json({'dato_bancario':respuesta})
    }catch(error){
        console.log(error)
        return res.status(500).json({error})
    }
}

const editarDatoBancario = async(req,res) => {
    let id_dato_bancario = req.params.id_dato_bancario
    let dato_bancario = req.body
    try {
        await Schema.dato_bancarioSchemaEditar.validateAsync(dato_bancario);
    }
    catch (err) {
        res.status(400).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
        return;
    }
    try{
        let respuesta = await logicaDB.actualizarDatoBancarioDB(id_dato_bancario,dato_bancario)
        return res.status(200).json({'filas':respuesta})
    }catch(error){ return res.status(500).json({error})}
}

const consultarDatoBancario = async(req,res) => {
    let id_dato_bancario = req.params.id_dato_bancario
    try{
        let respuesta = await logicaDB.consultarDatoBancarioDB(id_dato_bancario)
        return res.status(200).json({'dato_bancario':respuesta})
    }catch(error){return res.status(500).json({error})}
}

const consultarDatosBancarios = async(req,res) => {
    try{
        let respuesta = await logicaDB.consultarDatosBancariosDB()
        return res.status(200).json({'datos_bancarios':respuesta})
    }catch(error){return res.status(500).json({error})}
}
const consultarDatosBancariosChofer = async(req,res) => {
    let id_chofer = req.params.id_chofer
    try{
        let respuesta = await logicaDB.consultarDatosBancariosChoferDB(id_chofer)
        return res.status(200).json({'datos_bancarios':respuesta})
    }catch(error){return res.status(500).json({error})}
}
module.exports = {
    crearDatoBancario,
    editarDatoBancario,
    consultarDatoBancario,
    consultarDatosBancarios,
    consultarDatosBancariosChofer
}
