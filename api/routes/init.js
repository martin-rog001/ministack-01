const express = require('express')
const mysql = require('mysql2')
const router = express.Router();

const mysqlConf={
    host: process.env.MS01_DB_HOST,
    user: process.env.MS01_DB_USER,
    password: process.env.MS01_DB_PASS,
    database: process.env.MS01_DB_NAME
}

console.log('MySql Conf', mysqlConf);
console.log(process.env);

// mysql.createConnection(mysqlConf);

router.get('/',(req,res,next) => {

    pool = mysql.createPool(mysqlConf);

    pool.getConnection((err,conn) => {
        if(err){
            res.send("Mysql connection failed!");
            console.log(err);
        } else {
            res.send("Mysql connection successful!");
        }
    })
})

router.get('/create',(req,res,next) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS numbers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      number INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )  ENGINE=INNODB;
  `;
    pool.query(sql, function(err, rows, fields) {
        // Connection is automatically released when query resolves
        if(err){
            res.send("Create table failed!");
        } else {
            res.send("Create table successful!");
        }

     })
})




router.get('/insert',(req,res,next) => {

    const number = Math.round(Math.random() * 100)

    const sql = `INSERT INTO numbers (number) VALUE (${number})`;
    pool.query(sql, function(err, rows, fields) {
        // Connection is automatically released when query resolves
        if(err){
            res.send("Inserting number failed!");
        } else {
            res.send("Inserting number successful!");
        }

     })
})


// conn.connect(err => {
//     if(err){
//         console.log("Error!", err);
//     } else {
//         console.log("Mysql connected!");
//     }

//     conn.query("select * from sentences", (err, result, fields) => {
//         if(err){
//             console.log("Error!", err);
//         } else {
//             console.log(result[0].sentence_text);
//         }
//     })
// })
module.exports = router;