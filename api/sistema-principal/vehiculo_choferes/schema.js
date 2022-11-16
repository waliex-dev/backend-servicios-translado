const { Joi } = require("express-validation")
const { required } = require("joi")

const vehiculoChoferSchemaCrear = Joi.object({
    chofereId:Joi.number().required().min(0),
    vehiculoId:Joi.number().required().min(0)
})

const vehiculoSchemaCrear = Joi.object({
    patente: Joi.string().required().min(6).max(45),
    color: Joi.string().required().min(2).max(45),
    tipo: Joi.string().allow('',null).min(6).max(45),
    propietario:Joi.number().required().min(0).max(2),
    estado:Joi.number().required().min(0).max(1)
})

module.exports = {
    vehiculoChoferSchemaCrear,
    vehiculoSchemaCrear
}