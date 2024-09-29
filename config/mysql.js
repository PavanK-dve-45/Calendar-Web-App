const mysql = require('mysql2/promise');
const Boom = require('@hapi/boom');
const {databaseMessages} = require('../utils/constants')
require('dotenv').config();
const mysqlPool= mysql.createPool({
    host: process.env.HOST ,
    user:process.env.USER,
    port: process.env.DBPORT,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})

async function databaseConnection() {
    try {
        const connection = await mysqlPool.getConnection();
        console.log(databaseMessages.connected);        
        connection.release();
    } catch (error) {
        console.error("Not Connected", error.message);
        throw Boom.badImplementation(databaseMessages.connectionError, error);
    }
}
databaseConnection()
module.exports = mysqlPool;