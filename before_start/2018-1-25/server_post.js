const http = require('http');
// const common = require('./libs/common');
const fs = require('fs');
const uuid = require('uuid/v4');

// Buffer.prototype.split =Buffer.prototype.split||function(p){
//     let arr =[];
//     let op =this; 
//     let index=0;
//     const p_length = p.length;
//     while(op.indexOf(p)>0){
//         index = op.indexOf(p);
//         arr.push(op.slice(0,index));
//         op =op.slice(index+p_length,op.length);
//     }
//     arr.push(op);

//   return arr;
//  }

 Buffer.prototype.split=Buffer.prototype.split||function (b){
    let arr=[];
  
    let cur=0;
    let n=0;
    while((n=this.indexOf(b, cur))!=-1){
      arr.push(this.slice(cur, n));
      cur=n+b.length;
    }
  
    arr.push(this.slice(cur));
  
    return arr;
  };


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
        
        let post ={};
        let files={};
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

        // console.log(boundary);
        // console.log(splitPattern);

        // console.log(splitPattern === boundary );
       

        
       
        
        let data_parser = data.split(splitPattern);
       // console.log(data_parser.length);
        
       //data_parser.forEach(x=> console.log(x));

      //  data_parser.forEach(x=> console.log(x.toString()));

        // 2: throw away header and tail

        let data_rm_h_t = data_parser.filter((x,index)=>{
            return index>0 && index< data_parser.length-1 ;
        });

        data_parser.pop();
        data_parser.shift()

       // data_rm_h_t.forEach(x=> console.log(x.toString()));

        //console.log(data_rm_h_t.length);
        //3: discard  each item  head \r\n  and tail \r\n

        let  length2 ='\r\n'.length;

      let data1=   data_rm_h_t.map(x=>{
            const temp = x.slice(length2,x.length);
            return temp.slice(0,temp.length-length2);
        });

        data_parser = data_parser.map(buffer => buffer.slice(2,buffer.length-2));

       // console.log(data_parser.map(b=>b.toString()));

        //4 use first appear \r\n\r\n split  avoid in file content include  \r\n\r\n

    //  let data2 =   data1.map(x=>{
    //         const temp =[];
    //         temp[0]=x.split('/r/n/r/n')[0];
    //         temp[1]= x.split('/r/n/r/n')[1];
    //         return temp;
           
    //     });

    //     data2.forEach(x=> {
    //         x.forEach(y => console.log(y.toString())); 
    //     });
        
        data_parser.forEach(buffer=>{
            let n= buffer.indexOf('\r\n\r\n');

            let desc = buffer.slice(0,n);
            let content = buffer.slice(n+4);

            if(desc.indexOf('\r\n')== -1){
                // general data
                // Content-Disposition: form-data; name="pass"\r\n

                content = content.toString();

                let name = desc.split('; ')[1].split('=')[1];
               // console.log(name);
                name = name.toString().substring(1,name.length-1);

                post[name]=content;


            }else{
                // file data
                /* Content-Disposition: form-data; name="f1"; filename="test.txt"\r\n
                Content-Type: text/plain */
                let [line1,line2]  = desc.split('\r\n');

                let [,name,filename]= line1.split('; ');
                let type= line2.split(': ')[1];
                type = type.toString();

                name = name.split('=')[1];
                name = name.toString().substring(1,name.toString().length-1);

                filename = filename.split('=')[1];
                filename = filename.toString().substring(1,filename.toString().length-1);

                // console.log(name,filename,type);
                // console.log(content.toString());
                let path = `upload/${uuid()}`;

                fs.writeFile(path, content,  err=>{
                    if(err){
                        console.log('file write error',err);
                    }else{
                        files[name]= {filename,path,type};

                        console.log(files); 
                    }
                })


            }

          //  console.log(post)
        })

        //5  determine  描述里面  有没有 \r\n；


        // 








        res.end();
    });
});

server.listen(8080);