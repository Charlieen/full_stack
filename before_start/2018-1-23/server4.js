const http = require('http');
const querystring = require('querystring');


let server = http.createServer((req,res)=>{
  
    
    let strBuffer ='';

    req.on('data', data=>{
        strBuffer = strBuffer+ data;
    });

    req.on('end',()=>{
        let post = querystring.parse(strBuffer);
        console.log(strBuffer, post);
    });

    res.end();
});

server.listen(8080);