const logicaDB = require('./logica')
const Schema = require('./schema')

const crearCliente = async(req,res) => {
    let cliente =  req.body
    try {
        await Schema.clienteSchemaCrear.validateAsync(cliente);
    }
    catch (err) {
        return res.status(200).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
    }
    try{
        let respuesta = await logicaDB.crearClienteDB(cliente)
        return res.status(200).json({'cliente':respuesta})
    }catch(error){
    return res.status(500).json({error})}
}

const editarCliente = async(req,res) => {
    let id_cliente = req.params.id_cliente
    let cliente = req.body
    try {
        await Schema.clienteSchemaEditar.validateAsync(cliente);
    }
    catch (err) {
        res.status(200).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
        return;
    }
    try{
        let respuesta = await logicaDB.actualizarClienteDB(id_cliente,cliente)
        return res.status(200).json({'filas':respuesta})
    }catch(error){ return res.status(500).json({error})}
}

const consultarCliente = async(req,res) => {
    let id_cliente = req.params.id_cliente
    try{
        let respuesta = await logicaDB.consultarClienteDB(id_cliente)
        return res.status(200).json({'cliente':respuesta})
    }catch(error){return res.status(500).json({error})}
}

const consultarClientesActivos = async(req,res) => {
    try{
        let respuesta = await logicaDB.consultarClientesActivosDB()
        return res.status(200).json({'clientes':respuesta})
    }catch(error){return res.status(500).json({error})}
}

const consultarClientesInactivos = async(req,res) => {
    try{
        let respuesta = await logicaDB.consultarClientesInactivosDB()
        return res.status(200).json({'clientes':respuesta})
    }catch(error){return res.status(500).json({error})}
}

const cambiarEstadoCliente = async(req,res) => {
    let id_cliente = req.params.id_cliente
    let estado = req.body.estado
    try{
        let respuesta = await logicaDB.cambiarEstadoClienteDB(id_cliente,estado)
        return res.status(200).json({'filas':respuesta})
    }catch(error){return res.status(500).json({error})}
}

module.exports = {
    crearCliente,
    editarCliente,
    consultarCliente,
    consultarClientesActivos,
    consultarClientesInactivos,
    cambiarEstadoCliente
}