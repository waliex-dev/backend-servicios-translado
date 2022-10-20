const { Joi } = require("express-validation")

const usuarioSchemaCrear = Joi.object({
    nombre:Joi.string().required().min(1).max(40),
    apellidos:Joi.string().required().min(1).max(40),
    correo:Joi.string().email().required(),
    password:Joi.string().required().min(6).max(100),
    estado:Joi.number().min(0).max(1)
})

const usuarioSchemaEditar = Joi.object({
    nombre:Joi.string().required().min(1).max(40),
    apellidos:Joi.string().required().min(1).max(40),
    correo:Joi.string().email().required()
})

module.exports = {
    usuarioSchemaCrear,
    usuarioSchemaEditar
}