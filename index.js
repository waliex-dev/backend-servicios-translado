const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')
const indexRouter = require('./routes/index')

require('dotenv').config()

app.set("view engine","ejs")
//MIDDLEWARES
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/prueba', (req,res) => {
    res.send('servidor corriendo')
})

app.use(process.env.PREFIJO,indexRouter)

//DESPLIEGUE
const puerto = process.env.PORT || 3300
app.listen(puerto, function () {
    console.log('Servidor corriendo en el puerto: '+puerto)
})