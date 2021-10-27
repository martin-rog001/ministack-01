const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    const sql = `SELECT * FROM numbers`;
    pool.query(sql,(err,results) => {
        if(err) {
            res.send('Query failed!');
            console.log(err);
        } else {
            res.send(results)
        }
    })
})

module.exports = router;