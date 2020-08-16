const http = require('http');
// const common = require('./libs/common');
const fs = require('fs');


Buffer.prototype.split =Buffer.prototype.split||function(p){
    let arr =[];
    let op =this; 
    let index=0;
    const p_length = p.length;
    while(op.indexOf(p)>0){
        index = op.indexOf(p);
        arr.push(op.slice(0,index));
        op =op.slice(index+p_length,op.length);
    }
    arr.push(op);

  return arr;
 }

//  Buffer.prototype.split=Buffer.prototype.split||function (b){
//     let arr=[];
  
//     let cur=0;
//     let n=0;
//     while((n=this.indexOf(b, cur))!=-1){
//       arr.push(this.slice(cur, n));
//       cur=n+b.length;
//     }
  
//     arr.push(this.slice(cur));
  
//     return arr;
//   };


let server = http.createServer((req,res)=>{

    let str ='';  // Binary data can not  change to string  then  damage,
    let arr=[];

    req.on('data', data=>{
        // str+=data;
        arr.push(data);
    });

    req.on('end',()=>{
  
        // console.log(str);
        let data = Buffer.concat(arr);
        
        
        // parser binary data 

        // 1:  use ------WebKitFormBoundaryS3PIHuUmn7kjT3d0  split
//------WebKitFormBoundaryS3PIHuUmn7kjT3d0    first two --  are flag sign  
        const splitPattern = data.split('\r\n')[0].toString();

        let boundary;
        if(req.headers['content-type']){
            let str = req.headers['content-type'].split('; ')[1];
            if(str){
                boundary = '--'+str.split('=')[1];
            }
        }

        console.log(boundary);
        console.log(splitPattern);

        console.log(splitPattern === boundary );
       

        
       
        
        let data_parser = Buffer.concat(data.split(boundary)).split('-');
        

       data_parser.forEach(x=> console.log(x.toString()));

        // 2: throw away header and tail


        //3: discard  each item  head \r\n  and tail \r\n


        //4 use first appear \r\n\r\n split  avoid in file content include  \r\n\r\n


        //5  determine  描述里面  有没有 \r\n；


        // 








        res.end();
    });
});

server.listen(8080);