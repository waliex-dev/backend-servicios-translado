const express = require('express')
const router = express.Router()
const controlador = require('./controlador')

router.post('/crear_usuario',controlador.crearUsuario)
router.get('/consultar_usuario/:id_usuario',controlador.consultarUsuario)
router.put('/editar_usuario/:id_usuario',controlador.editarUsuario)
router.get('/consultar_usuarios_activos',controlador.consultarUsuariosActivos)
router.get('/consultar_usuarios_inactivos',controlador.consultarUsuariosInactivos)
router.put('/cambiar_estado_usuario/:id_usuario',controlador.cambiarEstadoUsuario)

module.exports = router