/*******************************************************************************************
 * Objetivo: Arquivo responsável pelas requisições com o banco de dados da Doceria IANES
 * Data: 31/05/2026
 * Autor: Kauan Lopes Pereira
 * Versão: 1.0
 *******************************************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const bodyParserJSON = bodyParser.json()

app.use(cors())

app.use(bodyParserJSON)

const PORT = process.env.PORT || 8000

require('dotenv').config()

app.use((request,  response,  next) => {
    response.header('Access-Control-Allow-Origin',  '*')
    response.header('Access-Control-Allow-Methods',  'GET,  POST,  PUT,  DELETE,  OPTIONS')

    next()
})

//import das rotas
const usuariosRoute = require('./routes/routes_usuario.js')

app.use('/v1/ianes', usuariosRoute)

app.listen(PORT,  function () {
    console.log('API aguardando requisições....')
})