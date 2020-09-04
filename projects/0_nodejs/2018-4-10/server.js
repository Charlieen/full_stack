const express = require('express');

let server = express(); 
server.listen(8080);


server.use('/article',require('./router/acticle'));

server.use('/user',require('./router/user'));

server.use((req,res)=>{
    res.sendStatus(404);
    res.end();
})


/*
http://xxx.com/article/1234
http://xxx.com/article/1234/comment
http://xxx.com/article/1234/edit

http://www/com/article/aaa/a
http://www/com/article/aaa/b
http://www/com/article/aaa/c



http://www.com/user/4321
http://www.com/user/4321/comment

*/

