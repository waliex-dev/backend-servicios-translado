const express = require('express')
const router = express.Router()
const controlador = require('./controlador')
const { validarTokenLogin } = require('../../../services/jwt');

router.post('/login',controlador.inicioSesion)
router.get('/prueba',controlador.perro)

module.exports = router