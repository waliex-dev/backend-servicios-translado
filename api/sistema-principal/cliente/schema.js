const { Joi } = require("express-validation")
const { required } = require("joi")

const clienteSchemaCrear = Joi.object({
    nombre: Joi.string().required().min(2).max(40),
    apellidos: Joi.string().required().min(2).max(40),
    direccion: Joi.string().allow(' ',null).min(6).max(20),
    celular:Joi.number().required(),
    rut:Joi.string().min(9).max(12).required(),
    pais:Joi.string().required().min(5).max(20),
    ciudad:Joi.string().required().min(5).max(20),
    estado:Joi.number().required().min(0).max(1)
})

const clienteSchemaEditar = Joi.object({
    nombre: Joi.string().required().min(2).max(40),
    apellidos: Joi.string().required().min(2).max(40),
    direccion: Joi.string().allow(' ',null).min(6).max(20),
    celular:Joi.number().required(),
    rut:Joi.string().min(9).max(12).required(),
    pais:Joi.string().required().min(5).max(20),
    ciudad:Joi.string().required().min(5).max(20)
})


module.exports = {
    clienteSchemaCrear,
    clienteSchemaEditar
}