const { Joi } = require("express-validation")
const { required } = require("joi")

const vehiculoChoferSchemaCrear = Joi.object({
    chofereId:Joi.number().required().min(0),
    vehiculoId:Joi.number().required().min(0)
})

module.exports = {
    vehiculoChoferSchemaCrear
}