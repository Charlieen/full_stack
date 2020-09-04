const express = require('express');
const path = require('path');

let server = express();
server.listen(8080);


server.get('/baidu',(req,res,next)=>{
    res.redirect('https://www.baidu.com');
    res.end();
})