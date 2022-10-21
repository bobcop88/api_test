const Pool = require('pg').Pool
const pool = new Pool({
    user: 'u9mfxidgvnube',
    host: '35.214.200.39',
    database: 'dbum4sbxjslbnw',
    password: 'inscale20222',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM clients', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers,
}