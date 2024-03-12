const express = require('express');
const app = express()
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

app.use(bodyparser.json());



//MySQL details 

var mysqlConnection = mysql.createConnection({

    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'awt',
    port: 3309

});

mysqlConnection.connect((err) => {
    if(!err){
        console.log('Connection Established')
    }
    else{
        console.log('COnnection Failed')
    }
})

const port = 8080

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get('/users',(req,res) => {
    mysqlConnection.query(`SELECT * FROM USERS `,(err,rows) => {
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
})

app.get('/users/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })

});
