/*******************************************************************************************
 * Objetivo: Arquivo responsável pelos endpoints do usuario
 * Data: 12/05/2026
 * Autor: Kauan Lopes Pereira
 * Versão: 1.0
 *******************************************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const router = express.Router()

const bodyParserJSON = bodyParser.json()

const controllerUsuario = require('../controller/controller_usuario.js')

//endpoints para a rota de usuario
// GET ALL USUARIOS
router.get('/usuarios', cors(), async function (request, response) {
    let usuario = await controllerUsuario.listarUsuarios()

    response.status(usuario.status_code)
    response.json(usuario)
})

module.exports = router