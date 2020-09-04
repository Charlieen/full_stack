const express = require('express');
const myBodyParser = require('../expressAndKoa/libs/my-body-parser');


let server = express();
server.listen(8080);

// server.use((req,res,next)=>{

//     let str='';
//     req.on('data',data=>{
//         str += data;
//     });

//     req.on('end',()=>{
//         req.body=querystring.parser(str);
//         next();
//     });

// })

// function parserBody(req,res,next){
  

//         let str='';
//         req.on('data',data=>{
//             str += data;
//         });
    
//         req.on('end',()=>{
//            // req.body=querystring.parser(str);
//            req.body= str;
//             next();
//         });
    
    
// }

// server.use((req,res,next)=>parserBody(req,res,next));

server.use(myBodyParser.urlencoded);


server.post('/',(req,res)=>{
    console.log(req.body);
    
})