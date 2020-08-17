const http = require('http');
const mysql = require('mysql');
const fs = require('fs');
const url = require('url');
const zlib = require('zlib');

let db= mysql.createPool({host:'127.0.0.1',user:'root',password:'',port:3306,database:'20180127'});


let server = http.createServer((req,res)=>{
        // api
    //static file
    let {pathname,query} = url.parse(req.url,true); 
    let {user,pass}= query;
    switch (pathname) {
        
        case '/reg':

            if(!user){
                res.write('{"err":1,"msg":"username can\'t be null"}');
                res.end();
            }else if(!pass){
                res.write('{"err":1,"msg":"password can\'t be null"}');
                res.end();
            }else{
                db.query(`select * from user_table where username='${user}'`,(err,data)=>{
                    if(err){
                        res.write('{"err":1,"msg":"database error"}');
                        res.end();
                    }else if(data.length >0){
                        res.write('{"err":1,"msg":"this username exsits"}');
                        res.end();
                    }else{
                        db.query(`insert into user_table(username,password) values('${user}','${pass}')`,(err,data)=>{
                            if(err){
                                res.write('{"err":1,"msg":"database error"}');
                                res.end();
                            }else{
                                res.write('{"err":0, "msg":"success"}');
                                res.end();
                            }
                        })
                    }
                })
            }
            break;

        case '/login':
                console.log('----')
                db.query(`select * from user_table where username='${user}'`,(err,data)=>{
                    if(err){
                        res.write('{"err":1,"msg":"database error 1 "}');
                        res.end();
                    }else if(data.length >0){
                       
                        db.query(`select * from user_table where username='${user}'`,(err,data)=>{
                            if(err){
                                res.write('{"err":1,"msg":"database error 2 "}');
                                res.end();
                            }else if(data.length ==0){
                                res.write('{"err":1,"msg":"no this user"}');
                                res.end();
                            }else if(data[0].password!=pass){
                                res.write('{"err":1,"msg":"username or password is incorrect"}');
                                res.end();
                            }else{
                                res.write('{"err":0,"msg":"login Success"}');
                                res.end();
                            }
                        });

                        
                    }
                });
                break;
        
        default:
           let rs= fs.createReadStream(`www${pathname}`);
           let gz = zlib.createGzip();
            res.setHeader("content-encoding",'gzip');
            rs.pipe(gz).pipe(res);

            res.on('error',err=>{
                res.writeHeader(404);
                res.write('Not Found');
                res.end();
            });

            
    }

});

server.listen(8080);
