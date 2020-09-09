const urlLib= require('url');
const pathLib= require('path');
const http = require('http');
const https = require('https');
const fs= require('fs');
const assert = require('assert');


function requestUrl(url,headers){

    let urlObj = urlLib.parse(url);
    let httpMod =null;
  
      if(urlObj.protocol=='http:'){
          httpMod= http;
      }else if(urlObj.protocol =='https:'){
          httpMod= https;
      }else {
          throw new Error(`protocol can not identify:${urlObj.protocol}`);
      }
  
    return new Promise((resolve,reject)=>{
  
      let req= httpMod.request({
          host:urlObj.host,
          path:urlObj.path,
          headers:{}
      },(res)=>{
          // console.log('ok'); 
          // console.log(res.statusCode);
      
          if(res.statusCode>=200 && res.statusCode<300 || res.statusCode==304){
              let arr=[]
              res.on('data',data=>{
                  arr.push(data);
              });
              res.on('end',()=>{
                  let buffer = Buffer.concat(arr);
                  resolve({
                      statusCode:200,
                      body:buffer,
                      headers:res.headers
                  });
              });
             
          }else if(res.statusCode==301 || res.statusCode == 302){
              resolve({
                  statusCode:res.statusCode,
                  body:null,
                  headers:res.headers
              });
          } else {
              reject({
                  statusCode:res.statusCode,
                  body:null,
                  headers:res.headers
              });
          }
      
      });
  
      req.on('error',err=>{
          console.log('error!');
      });
      
      req.write(''); // send post data  login and see something
      
      req.end();  // formal begin
  
    })
  };


async function request_1(url,reqheaders){

    try {
        let {statusCode,body,headers} = await requestUrl(url,reqheaders);
        if(statusCode ==200){
            fs.writeFile('temp/tmall.html',body);
            return {body,headers};
        }else if (statusCode==301 || statusCode ==302){    
            return request(headers.location,reqheaders);
       
        }
       // console.log('success',statusCode,body,headers);
    } catch (e) {
            console.log(e);
    }  

}

async function request(url){
    try {
        while(1){
            let {statusCode,body,headers}= await requestUrl(url);

            console.log(statusCode,url);

            if(statusCode ==200){
                return {body,headers};
            }else{
                assert(statusCode ==301 || statusCode ==302);
                assert(headers.location);
                url = headers.location;
            }
        }
    } catch (e) {
        console.log(e);
    }
}

(async ()=>{
    let {body,headers} = await request('http://www.sohu.com');

    fs.writeFile('temp/tmall.html',body,err=>{
        if(err){
            console.log(err);
        }else{
            console.log('success!');
        }
    })
    
})()










