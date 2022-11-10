const express = require('express')
const router = express.Router()
const controlador = require('./controlador')

router.post('/crear_vehiculo_chofer',controlador.crearVehiculoChofer)
router.delete('/eliminar_vehiculo_chofer/:id_vehiculo_chofer',controlador.eliminarVehiculoChofer)
router.get('/consultar_vehiculo_chofer_id_chofer/:id_chofer',controlador.consultarvehiculoChoferPorIdChofer)

module.exports = router
