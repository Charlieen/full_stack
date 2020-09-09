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
             
          }else if(res.statusCode==301 || res.statusCode == 302|| res.statusCode == 307){
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


  


module.exports=  async function(url,reqHeader){
    try {
        while(1){
            console.log('1',url);
            let {statusCode,body,headers}= await requestUrl(url,reqHeader);

            if(statusCode ==200){
                return {body,headers};
            }else{
                assert(statusCode ==301 || statusCode ==302|| statusCode ==307);
                assert(headers.location);
                url = headers.location;
                //console.log(headers);
            }
        }
    } catch (e) {
        console.log(e);
    }
}