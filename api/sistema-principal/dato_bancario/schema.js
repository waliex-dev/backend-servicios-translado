const { Joi } = require("express-validation")
const { required } = require("joi")

const dato_bancarioSchemaCrear = Joi.object({
    numero_cuenta: Joi.number().required(),
    banco: Joi.string().required().min(2).max(45),
    correo: Joi.string().allow(' ',null).min(5).max(45),
    rut:Joi.string().min(8).max(10).required(),
    nombre:Joi.string().min(4).max(45).required(),
    tipo_cuenta:Joi.number().required(),
    chofereId:Joi.number().required().min(1)
})

const dato_bancarioSchemaEditar = Joi.object({
    numero_cuenta: Joi.number().required(),
    banco: Joi.string().required().min(2).max(45),
    correo: Joi.string().allow(' ',null).min(5).max(45),
    rut:Joi.string().min(8).max(10).required(),
    nombre:Joi.string().min(4).max(45).required(),
    tipo_cuenta:Joi.number().required(),
})


module.exports = {
    dato_bancarioSchemaCrear,
    dato_bancarioSchemaEditar
}