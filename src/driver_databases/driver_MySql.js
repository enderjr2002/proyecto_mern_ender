const mysql = require('mysql');
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    database: 'adminis'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('mysql =========> conectado con exito')
});

module.exports = mysql;