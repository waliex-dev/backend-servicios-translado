const logicaDB = require('./logica')
const Schema = require('./schema')
const { generarCadenaEncriptada } = require('../../../services/bcrypt')

const crearUsuario = async(req,res) => {
    let usuario = req.body
    try {
        await Schema.usuarioSchemaCrear.validateAsync(usuario);
    }
    catch (err) {
        res.status(400).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
        return;
    }
    try{
        usuario.password = await generarCadenaEncriptada(usuario.password)
        let respuesta = await logicaDB.crearUsuarioDB(usuario)
        return res.status(200).json({'usuario':respuesta})
    }catch(error){
    return res.status(500).json({error})}
}

const editarUsuario = async(req,res) => {
    let id_usuario = req.params.id_usuario
    let usuario = req.body
    try {
        await Schema.usuarioSchemaEditar.validateAsync(usuario);
    }
    catch (err) {
        res.status(400).json({'error':"error de validacion de campos. El campo: "+err.details[0].path});
        return;
    }
    try{
        let respuesta = await logicaDB.actualizarUsuarioDB(id_usuario,usuario)
        return res.status(200).json({'filas':respuesta})
    }catch(error){ return res.status(500).json({error})}
}

const consultarUsuario = async(req,res) => {
    let id_usuario = req.params.id_usuario
    try{
        let respuesta = await logicaDB.consultarUsuarioDB(id_usuario)
        return res.status(200).json({'usuario':respuesta})
    }catch(error){return res.status(500).json({error})}
}

const consultarUsuariosActivos = async(req,res) => {
    try{
        let respuesta = await logicaDB.consultarUsuariosActivosDB()
        return res.status(200).json({'usuarios':respuesta})
    }catch(error){return res.status(500).json({error})}
}

const consultarUsuariosInactivos = async(req,res) => {
    try{
        let respuesta = await logicaDB.consultarUsuariosInactivosDB()
        return res.status(200).json({'usuarios':respuesta})
    }catch(error){return res.status(500).json({error})}
}

const cambiarEstadoUsuario = async(req,res) => {
    let id_usuario = req.params.id_usuario
    let estado = req.body.estado
    try{
        let respuesta = await logicaDB.cambiarEstadoUsuarioDB(id_usuario,estado)
        return res.status(200).json({'filas':respuesta})
    }catch(error){return res.status(500).json({error})}
}

module.exports = {
    crearUsuario,
    editarUsuario,
    consultarUsuario,
    consultarUsuariosActivos,
    consultarUsuariosInactivos,
    cambiarEstadoUsuario
}