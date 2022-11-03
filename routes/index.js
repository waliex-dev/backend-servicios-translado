const express = require('express')
const router = express.Router()

//RUTAS SISTEMA PRINCIPAL
const inicio_sesion = require('../api/sistema-principal/inicio_sesion/routes')
const usuario = require('../api/sistema-principal/usuario/routes')
const cliente = require('../api/sistema-principal/cliente/routes')
const chofer = require('../api/sistema-principal/chofer/routes')
const dato_bancario = require('../api/sistema-principal/dato_bancario/routes')
const vehiculo = require('../api/sistema-principal/vehiculo/routes')
const vehiculo_chofer = require('../api/sistema-principal/vehiculo_choferes/routes')

router.use('/inicio_sesion',inicio_sesion)
router.use('/usuario',usuario)
router.use('/cliente',cliente)
router.use('/chofer',chofer)
router.use('/dato_bancario',dato_bancario)
router.use('/vehiculo',vehiculo)
router.use('/vehiculo_chofer',vehiculo_chofer)

module.exports = router