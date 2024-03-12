const express = require('express');
const app = express()
const port = 4002
const cors = require('cors');

app.use(cors())

const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    port:'3309',
    password:'root',
    database:'awt'
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', async (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const insertQuery = `INSERT INTO user (firstName,lastName,email,password) VALUES (?,?,?,?)`;

    try{

        const [rows,fields] = await pool.execute(insertQuery, [firstName,lastName,email,password])

        res.send('User Registered')
        console.log("User Registered")
    }
    catch (error){
        console.error("Failed : " , error)
        res.status(500).send('Failed to register')
    }
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

