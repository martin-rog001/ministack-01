const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'foo'
});


pool.getConnection((err,conn) => {
    if(err){
        console.log("Mysql connection failed!");
    } else {
        console.log("Mysql connection successful!");
    }
})