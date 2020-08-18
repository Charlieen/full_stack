const express = require('express');   // main
const body = require('body-parser');  // generale post data
const multer = require('multer');    //  file post data

//middleware

let server = express();
server.listen(8080);

server.use(body.urlencoded({extended:false}));

let multerObj = multer({dest:'./upload'});

server.use(multerObj.any());




server.post('/api',(req,res)=>{

    if(req.headers['origin'] == 'null' || req.headers['origin'].startsWith('http://localhost')){
        res.setHeader('Access-Control-Allow-Origin','*');  // two dangerous
    }


    res.send('OK');

    console.log(req.body);
    console.log(req.files);
});

// 
server.use(express.static('./www/'))

