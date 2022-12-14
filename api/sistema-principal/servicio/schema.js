const { Joi } = require("express-validation")
const { required } = require("joi")

const servicioSchemaCrear = Joi.object({
    nombre: Joi.string().required().min(2).max(70),
    fecha: Joi.date().required(),
    estado: Joi.number().required().min(0).max(2),
    tipo:Joi.number().allow(null).min(0).max(1),
    valor:Joi.number().allow(null),
    moneda: Joi.number().allow(null),
    valor_clp: Joi.number().allow(null),
    valor_cambio:Joi.number().allow(null),
    tipo_servicio:Joi.number().required().min(1).max(2),
    clienteId:Joi.number().required(),
    usuarioId:Joi.number().required()
})

const lineaServicioSchemaCrearArray = Joi.object({
    fecha: Joi.date().required(),
    numero_guia: Joi.number().allow(null),
    pagado: Joi.number().allow(null).min(0).max(1),
    total_pago:Joi.number().allow(null),
    patente_trailer:Joi.string().allow(''),
    vehiculoId:Joi.number().required(),
    chofereId:Joi.number().required(),
})

const lineaServicioSchemaCrearIndividual = Joi.object({
    fecha: Joi.date().required(),
    numero_guia: Joi.number().allow(null),
    pagado: Joi.number().allow(null).min(0).max(1),
    total_pago:Joi.number().allow(null),
    patente_trailer:Joi.string().allow(''),
    vehiculoId:Joi.number().required(),
    chofereId:Joi.number().required(),
    servicioId:Joi.number().required()
})

const pagoServicioSchemaCrear = Joi.object({
    monto: Joi.number().required(),
    tipo: Joi.number().allow(null),
    fecha: Joi.date().required(),
    observación: Joi.string().allow(''),
    lineaServicioId: Joi.number().required()
})

module.exports ={
    servicioSchemaCrear,
    lineaServicioSchemaCrearArray,
    lineaServicioSchemaCrearIndividual,
    pagoServicioSchemaCrear
}