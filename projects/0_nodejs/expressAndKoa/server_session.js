const express = require('express');
const cookieSession = require('cookie-session');

let server = express();
server.listen(8089);

server.use(cookieSession({
    secret:'dzgzdzg'
}));

server.get('/',(req,res)=>{
    
    if(req.session['count']){
        req.session['count']++;
    }else{
        req.session['count']=1;
    }
    console.log(req.session);

    res.send(`you are ${req.session['count']} times login !`);
    res.end();
})