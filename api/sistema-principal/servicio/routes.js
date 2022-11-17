const express = require('express')
const router = express.Router()
const controlador = require('./controlador')

router.post('/crear_servicio',controlador.crearServicio)
router.get('/ver_servicio/:id',controlador.verServicio)
router.get('/ver_servicios_cliente/:id_cliente',controlador.verServiciosPorClienteId)
router.put('/cambiar_estado_servicio/:id',controlador.cambiarEstadoServicio)
router.post('/crear_linea_servicio',controlador.crearLineaServicio)
router.put('/editar_linea_servicio/:id_linea_servicio',controlador.editarLineaServicio)
router.post('/crear_pago',controlador.crearPago)
router.put('/editar_pago/:id_pago',controlador.editarPago)
router.get('/obtener_vehiculos_asociados/:id_chofer',controlador.obtenerVehiculosAsociadosChoferId)

module.exports = router