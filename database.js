const Sequelize = require('sequelize')
require('dotenv').config()

const InitModels = require('./utils/models/init-models')

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER_NAME ,
    process.env.DATABASE_PASSWORD , {
        dialect: 'mysql',
        host: process.env.HOST
    }
)

const models = InitModels(sequelize)

module.exports = {
    sequelize,
    models
}