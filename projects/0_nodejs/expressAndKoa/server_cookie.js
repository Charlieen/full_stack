const express= require('express');

const cookieParser = require('cookie-parser');
const sessionCookie = require('cookie-session');

const server = express();

server.listen(8080);

server.use(cookieParser('abscdedefeefe'));

server.get('/',(req,res)=>{
    console.log('cookies:',req.cookies);
    console.log('signed:',req.signedCookies);
    // cookie(name,value,options)
    res.cookie('password','54321',{
        signed:true
    });
    res.end();
})