const { Joi } = require("express-validation")
const { required } = require("joi")

const choferSchemaCrear = Joi.object({
    nombre: Joi.string().required().min(2).max(45),
    apellidos: Joi.string().required().min(2).max(45),
    nacionalidad: Joi.string().required().min(2).max(45),
    rut:Joi.string().min(8).max(10).required(),
    celular:Joi.number().required(),
    correo: Joi.string().required().min(5).max(45),
    direccion: Joi.string().allow(' ',null).min(3).max(45),
    estado:Joi.number().required().min(0).max(1),
    vehiculo_propio:Joi.number().required().min(0).max(2)
})

const choferSchemaEditar = Joi.object({
    nombre: Joi.string().required().min(2).max(45),
    apellidos: Joi.string().required().min(2).max(45),
    nacionalidad: Joi.string().required().min(2).max(45),
    rut:Joi.string().min(8).max(10).required(),
    celular:Joi.number().required(),
    correo: Joi.string().required().min(5).max(45),
    direccion: Joi.string().allow(' ',null).min(3).max(45),
    estado:Joi.number().required().min(0).max(1),
    vehiculo_propio:Joi.number().required().min(0).max(2)
})

module.exports ={
    choferSchemaCrear,
    choferSchemaEditar
}