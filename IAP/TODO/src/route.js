const {readTable,updateTable,deleteTablerow,insertTable}=require('./server')
const bodyParser=require('body-parser')
const express=require('express');
const app=express();

app.use(bodyParser.json());


app.get('/todos',(_,resp)=>{
    readTable((data)=>{
        resp.send(data);
    })  
})
 app.post('/todos',(req,resp)=>{
    insertTable(req.body);
    resp.status(200).send({message:'success'})
 })

 app.patch("/todos/:id",(req,resp)=>{
    updateTable(req.body,req.params.id);
    resp.status(200).send({message:"success"})
    
 })
  app.delete("/todos/:id",(req,resp)=>{
    deleteTablerow(req.params.id);
    resp.status(200).send({ message:"success guess"})

  })



app.listen(3002,()=>{
    console.log('server is running on port 3002');
})


