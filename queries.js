const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'seim-2020',
  port: 5432,
})

const getAccx = (request, response) => {
    pool.query('SELECT id, accx FROM imu_table ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getCount = (request, response) => {
    pool.query('select count(id) from imu_table', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

module.exports = {
    getAccx,
    getCount
}