const urlLib= require('url');
const pathLib= require('path');
const http = require('http');
const https = require('https');
const fs= require('fs');


// let req = http.request('http:www.taobao.com');

let req= http.request({
    host:'www.taobao.com',
    path:'/',
    headers:{
        
    }
},(res)=>{
    console.log('ok'); 
    console.log(res.statusCode);

    if(res.statusCode>=200 && res.statusCode<300 || res.statusCode==304){
        let arr=[]
        res.on('data',data=>{
            arr.push(data);
        });
        res.on('end',()=>{
            let buffer = Buffer.concat(arr);
           
             fs.writeFile(pathLib.resolve('temp','taobao.html'),buffer,err=>{
                 if(err){
                     console.log('write file error!',err);
                 }else{
                     console.log('finished!');
                 }
             });

             console.log('ok');
        });
       


    }else if(res.statusCode==301 || res.statusCode == 302){
        console.log(res.headers);
    } else {
        console.log('error',res.statusCode);
    }

});



req.on('error',err=>{
    console.log('error!');
});

req.write(''); // send post data  login and see something

req.end();  // formal begin

