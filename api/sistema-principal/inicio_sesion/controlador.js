const logicaDB = require('./logica')
const { resolverCadenaEncriptada } = require('../../../services/bcrypt')
const { generarTokenLogin } = require('../../../services/jwt')

const inicioSesion = async(req,res) => {
    let ingreso = req.body
    try{
        let usuario = await logicaDB.buscarUsuarioCorreoDB(ingreso.correo)
        if(!usuario) return res.status(400).json({'login':false,'error':'No existe usuario'})
        if(!await resolverCadenaEncriptada(ingreso.password,usuario.password))
        { return res.status(400).json({'login':false,'error':'Contraseña incorrecta'})}
        let token = await generarTokenLogin(usuario)
        return res.status(200).json({'login':true, token})
    }catch(error){
        console.log(error)
        return res.status(500).json({error})
    }
}

const perro = async(req,res) => {
    return res.status(200).json({'mensaje':'Funciona pa'})
}

module.exports = { inicioSesion, perro }