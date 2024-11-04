const express=require('express');
const mysql=require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { hostname } = require('os');



const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"Recipe"
})

connection.connect((error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("connected");
})

const app=express()
app.use(cors())
app.use(bodyParser.json())
app.get('/recipes',(req,res)=>{
    connection.query('SELECT * FROM recipe',(error,data)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(data);
        }
    })
})

app.post('/recipes',(req,res)=>{
    const {name,image,author,ingredients}=req.body;
    const queryString=`INSERT INTO recipe (name,image,author,ingredients) VALUES (?,?,?,?)`
    connection.query(queryString,[name,image,author,ingredients],(error,data)=>{
        if(error){
            console.log(error);
            res.status(401).send({message:"Error inserting data"+error});
        }
        else{
            console.log(data);
            res.status(200).send({message:"Data inserted successfully"});
        }
    })

})

app.listen(3003,()=>{
    console.log("server is running on port 3003");
})