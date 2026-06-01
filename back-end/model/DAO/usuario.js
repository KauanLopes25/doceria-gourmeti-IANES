/*******************************************************************************************
 * Objetivo: Arquivo responsável pela comunicação pela consulta de dados no banco de dados da Doceria IANES
 * Data: 31/05/2026
 * Autor: Arthur Angelus
 * Versão: 1.0
 *******************************************************************************************/

const knex = require('../../db.js')

// SELECT ALL
const getSelectAllUsers = async function () {
    try {
        const rows = await knex.select('*').from('tbl_usuario')
        return rows.map(usuario => {
            return usuario
        })
    } catch (error) {
        console.error(error)
        return false
    }
}

module.exports = {
    getSelectAllUsers
}