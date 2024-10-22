const express=require('express');
const mysql=require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Db } = require('mongodb');




const app=express();
// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// })
app.use(cors())
app.use(bodyParser.json());

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ahmedazhar',
    database:'AJAX'
});

connection.connect((error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("Connected to db");
})

app.get('/api/data',(req,res)=>{
    connection.query('SELECT * FROM ajaxUser',(error,data)=>{
        if(error){
            console.log(error);
            res.status(500).send({message:"Error fetching data"})
        }else{
            res.send(data)
        }
    })
})



app.post('/api/data', (req, res) => {
  const { name, age,hobby,city } = req.body;
  const query='INSERT INTO ajaxUser (name,hobby,age,city) VALUES (?,?,?,?)'
  connection.query(query,[name,hobby,age,city],(err,result)=>{
    if(err){
        console.log(err);
        res.status(500).send({message:"Error inserting data"})
    }else{
        res.send({message:"Data inserted successfully"})
    }
  })
  
});



app.listen(3001,()=>{
    console.log("Server listening on port 3001");
})