const express = require('express')
const router = express.Router()
const controlador = require('./controlador')

router.post('/crear_vehiculo',controlador.crearVehiculo)
router.put('/editar_vehiculo/:id_vehiculo',controlador.editarVehiculo)
router.get('/consultar_vehiculo/:id_vehiculo',controlador.consultarVehiculo)
router.get('/consultar_vehiculos_activos',controlador.consultarVehiculosActivos)
router.get('/consultar_vehiculos_inactivos',controlador.consultarVehiculosInactivos)
router.put('/cambiar_estado_vehiculo/:id_vehiculo',controlador.cambiarEstadoVehiculo)


module.exports = router