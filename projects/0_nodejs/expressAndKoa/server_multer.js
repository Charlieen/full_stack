const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const server= express();
server.listen(8080);

const multerObj = multer({dest:'./upload'});

server.use(multerObj.any());

// http request data in form data include  urlencoded  and multi-part/form-data

server.use(bodyParser.urlencoded({extended:false}));


server.post('/upload',(req,res,next)=>{

    let i=0;

    let post = req.body;
    console.log(post);

    function __next(){
        let newName = req.files[i].path + path.extname(req.files[i].originalname);
        fs.rename(req.files[i].path,newName,(err)=>{
            if(err){
                res.sendStatus(500,'rename error');
                res.send(err);
            }else{
                i++;

                if(i>=req.files.length){ 
                   res.send('upload ok');
                   res.end();
                }else{
                    __next();
                }
            }
        })
    };

    __next();

});



