const express = require('express')
const router = express.Router()
const controlador = require('./controlador')

router.post('/crear_servicio',controlador.crearServicio)
router.post('/crear_servicio_otros',controlador.crearServicioOtros)
router.get('/ver_servicio/:id',controlador.verServicio)
router.get('/ver_servicio_otros/:id',controlador.verServicioOtros)
router.get('/ver_servicios_cliente/:id_cliente/:estado',controlador.verServiciosPorClienteId)
router.put('/cambiar_estado_servicio/:id',controlador.cambiarEstadoServicio)
router.post('/crear_linea_servicio',controlador.crearLineaServicio)
router.put('/editar_linea_servicio/:id_linea_servicio',controlador.editarLineaServicio)
router.delete('/eliminar_linea_servicio/:id_linea_servicio',controlador.eliminarLineaServicio)
router.post('/crear_pago',controlador.crearPago)
router.put('/editar_pago/:id_pago',controlador.editarPago)
router.delete('/eliminar_pago/:id_pago',controlador.eliminarPago)
router.get('/obtener_pagos/:id_linea_servicio',controlador.obtenerPagos)
router.get('/obtener_vehiculos_asociados/:id_chofer',controlador.obtenerVehiculosAsociadosChoferId)

router.post('/crear_ingreso',controlador.crearIngreso)
router.put('/editar_ingreso/:id_ingreso',controlador.editarIngreso)
router.delete('/eliminar_ingreso/:id_ingreso',controlador.eliminarIngreso)

router.post('/crear_egreso',controlador.crearEgreso)
router.put('/editar_egreso/:id_egreso',controlador.editarEgreso)
router.delete('/eliminar_egreso/:id_egreso',controlador.eliminarEgreso)


router.post('/crear_adelanto',controlador.crearAdelanto)
router.put('/editar_adelanto/:id_adelanto',controlador.editarAdelanto)
router.delete('/eliminar_adelanto/:id_adelanto',controlador.eliminarAdelanto)

//Editar servicio
router.put('/editar_servicio/:id_servicio',controlador.editarServicio)

//Obtener ingresos, egresos y adelantos
router.get('/obtener_ingresos/:id_servicio',controlador.obtenerIngresos)
router.get('/obtener_egresos/:id_servicio',controlador.obtenerEgresos)
router.get('/obtener_adelantos/:id_servicio',controlador.obtenerAdelantos)

//Rutas para filtrar
router.post('/filtrar_ingresos/:id_servicio',controlador.filtrarIngresos)
router.post('/filtrar_egresos/:id_servicio',controlador.filtrarEgresos)
router.post('/filtrar_adelantos/:id_servicio',controlador.filtrarAdelantos)

module.exports = router