//Mysql package
const mysql = require('mysql2');

//Require the configuration files
const config = require('../config/config.json');

//Connection with mysql
const pool = mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
})

//export pool
module.exports = pool.promise();