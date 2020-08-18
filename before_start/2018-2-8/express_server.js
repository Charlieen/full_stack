const express = require('express');   // main
const body = require('body-parser');  // generale post data
const multer = require('multer');    //  file post data
const mysql = require('mysql');


//middleware
let db= mysql.createPool({host:'localhost',port:3306,user:'root',password:'',database:'201828'});

let server = express();
server.listen(8080);

server.use(body.urlencoded({extended:false}));

let multerObj = multer({dest:'./upload'});

server.use(multerObj.any());




server.use('/api',(req,res)=>{
    
    if(req.headers['origin'] == 'null' || req.headers['origin'].startsWith('http://localhost')){
        res.setHeader('Access-Control-Allow-Origin','*');  // two dangerous
    }



    let arr=[]; 
    req.files.forEach(file=>{
        arr.push(`('${file.originalname}','${file.filename}',${Math.floor(Date.now()/1000)})`); 
    });
    let sql = `insert into image_table(originalname,filename,filetime)values${arr.join(',')}`;
    // console.log(sql);

    db.query(sql,err=>{
        console.log('error:',err);
        if(err){
            res.send('no ok');
        }else{
            res.send('OK!');
        }
    });


});

// 
server.use(express.static('./www/'))

