const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

let users= {
  //  'blue':'123456'
}

let server = http.createServer((req,res)=>{
    //GET
    let {pathname,query} = url.parse(req.url);

    query = querystring.parse(query);

    //POST
    let str='';

    req.on('data', data=>{
        str += data; 
    });

    req.on('end',()=>{
        let post = querystring.parse(str);
        let {user,pass} = query;

        switch (pathname) {
            case '/reg': 
             
                
                if(!user){
                    res.write('{"err":1,"msg":"user must not empty"}')
                }else if(!pass){
                    res.write('{"err":1,"msg":"password must not empty"}')
                }else if(! /^\w{8,32}$/.test(user)){
                    res.write('{"err":1,"msg":"user not legal"}')
                }else if (/^[^'|"]$/.test(pass)){
                    res.write('{"err":1,"msg":"pass not legal"}')
                }else if (users[user]){
                    res.write('{"err":1,"msg":"user have been used"}')
                }else{
                    users[user]=pass;
                    res.write('{"err":0,"msg":"reg success"}');

                }
               res.end();
                
            break;
            case '/login':

                if(!user){
                    res.write('{"err":1,"msg":"user must not empty"}')
                }else if(!pass){
                    res.write('{"err":1,"msg":"password must not empty"}')
                }else if(! /^\w{8,32}$/.test(user)){
                    res.write('{"err":1,"msg":"user not legal"}')
                }else if (/^[^'|"]$/.test(pass)){
                    res.write('{"err":1,"msg":"pass not legal"}')
                }else if (!users[user]){
                    res.write('{"err":1,"msg":"no this user"}')
                }else if(users[user] !== pass){
                    res.write('{"err":1,"msg":"username or password is incorrect"}')
                }else {
                    res.write('{"err":0,"msg":"login success"}')
                }
             
                res.end();
            break;
        
            default:    // files
            fs.readFile(`www${pathname}`,(err,data)=>{
                if(err){
                    res.writeHeader(404);
                    res.write('Not Found');
                }else{
                    res.write(data);
                }
                res.end();
            })
            break;
        }
    

    })


 

})

server.listen(8080);