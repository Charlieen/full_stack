const urlLib= require('url');
const pathLib= require('path');
const http = require('http');
const https = require('https');
const fs= require('fs');

let req= http.request('http://www.baidu.com',(res)=>{
    console.log('ok'); 
    console.log(res.statusCode);

    if(res.statusCode>=200 && res.statusCode<300 || res.statusCode==304){
        let arr=[]
        res.on('data',data=>{
            arr.push(data);
        });
        res.on('end',()=>{
            let buffer = Buffer.concat(arr);
           
             fs.writeFile(pathLib.resolve('temp','baidu.html'),buffer,err=>{
                 if(err){
                     console.log('write file error!',err);
                 }else{
                     console.log('finished!');
                 }
             });

             console.log('ok');
        });
       


    }else {
        console.log('error',res.statusCode);
    }

});

req.on('error',err=>{
    console.log('error!');
});

req.write(''); // send post data  login and see something

req.end();  // formal begin

