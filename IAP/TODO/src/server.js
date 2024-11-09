const mysql=require('mysql');
const { isConditionalExpression } = require('typescript');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
})

connection.connect(()=>{
    console.log('connected')
})

 function createDb(name){
    connection.query(`CREATE DATABASE  ${name}`,(error)=>{

    if (error){
    console.log(error)
     }
   else {
   console.log("Database Created");
   }
    })
   
 }
//  createDb("TODO");
function useDatabase(name){
    connection.query(`USE ${name}`, (error)=>{

        console.log("Using database " + name)
    })
}
function createTable(name){
    useDatabase('TODO');
    connection.query(` CREATE TABLE  ${name} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        completed BOOLean DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,(error)=>{
            if (error){
                console.log(error);
            }
            else{
                console.log('Table created successfully')
            }

        })

}
function readTable(callback){
    useDatabase("TODO"); 
    connection.query('SELECT * FROM todo',(error,data)=>{
        if (error) {
            console.log(error);
            callback([])
        }
        else{
            callback(data);
        }
    }
    )
}



// createTable('todo');


function insertTable(data){
    useDatabase('TODO');
    connection.query('INSERT INTO todo(title,description,completed) VALUES(?,?,?)',[data.title,data.description,data.completed],(error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(' DATA IS INSERTED successFULLY');
        }

    })
}



function updateTable(data,id){
     useDatabase('TODO');
     let query='UPDATE todo SET ';
    /*
    UPDATE todo SET title="Zakiya", description='description',completed=true WHERE id=1
    UPDATE todo SET title=?, description=? 
    const title="Hello"
    title=title+" World"
    */
     let params=[];
     Object.keys(data).forEach((key,index)=>{
        query+=`${key}=?`;
        if(index < Object.keys(data).length-1){
            query+=",";
        }
        params.push(data[key]);
     })
     query+=" WHERE id=?";
     params.push(id);

     connection.query(query,params, (error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log('updated successfully');
    }
     })
}


function deleteTablerow(id){
    useDatabase('TODO');
    connection.query('DELETE FROM todo WHERE id=?',[id],(error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log('deleted successfully');
        }
    })

}



module.exports={readTable,updateTable,deleteTablerow,insertTable}