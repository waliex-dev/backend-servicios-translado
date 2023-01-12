const express = require('express')
const router = express.Router()
const controlador = require('./controlador')

router.post('/crear_cliente',controlador.crearCliente)
router.get('/consultar_cliente/:id_cliente',controlador.consultarCliente)
router.put('/editar_cliente/:id_cliente',controlador.editarCliente)
router.get('/consultar_clientes_activos',controlador.consultarClientesActivos)
router.get('/consultar_clientes_inactivos',controlador.consultarClientesInactivos)
router.put('/cambiar_estado_cliente/:id_cliente',controlador.cambiarEstadoCliente)
router.get('/buscar_clientes_activos/:search',controlador.buscarClienteActivos)
router.get('/buscar_clientes_inactivos/:search',controlador.buscarClientesInactivos)

module.exports = router