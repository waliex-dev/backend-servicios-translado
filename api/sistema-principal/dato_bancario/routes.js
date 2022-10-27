const express = require('express')
const router = express.Router()
const controlador = require('./controlador')

router.post('/crear_dato_bancario',controlador.crearDatoBancario)
router.put('/editar_dato_bancario/:id_dato_bancario',controlador.editarDatoBancario)
router.get('/consultar_dato_bancario/:id_dato_bancario',controlador.consultarDatoBancario)
router.get('/consultar_datos_bancarios',controlador.consultarDatosBancarios)
router.get('/consultar_datos_bancarios_chofer/:id_chofer',controlador.consultarDatosBancariosChofer)

module.exports = router