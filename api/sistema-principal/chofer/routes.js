const express = require('express')
const router = express.Router()
const controlador = require('./controlador')

router.post('/crear_chofer',controlador.crearChofer)
router.put('/editar_chofer/:id_chofer',controlador.editarChofer)
router.get('/consultar_chofer/:id_chofer',controlador.consultarChofer)
router.get('/consultar_choferes_activos',controlador.consultarChoferesActivos)
router.get('/consultar_choferes_inactivos',controlador.consultarChoferesInactivos)
router.put('/cambiar_estado_chofer/:id_chofer',controlador.cambiarEstadoChofer)
router.get('/buscar_chofer_activos/:search',controlador.buscarChoferActivos)
router.get('/buscar_chofer_inactivos/:search',controlador.buscarChoferInactivos)


module.exports = router;