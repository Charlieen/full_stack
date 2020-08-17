const mysql = require('mysql');

// connect pool 
let db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    port:3306,
    database:'20180127',
    connectionLimit:10
});


db.query(`insert into user(name,gender,chinese,math,english)values('dzg','M',98,22,33);`,(err,data)=>{
    if(err){
        console.log('error', err);
    }else{
        console.log(data);
    }
}) 