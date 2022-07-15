const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost:3306',
    user: 'root',
    password: 'avialves324',
    database: 'books' });

module.exports = connection;