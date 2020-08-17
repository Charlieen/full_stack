const http = require('http');
const fs = require('fs');
const url = require('url');


const server = http.createServer((req,res)=>{
    let {pathname}= url.parse(req.url);

    console.log(pathname);
   
  //  const  ifMS = req.getHeader('If-Modified-Since:');
    
  const ifMS = req.headers['if-modified-since'];


     fs.stat(`www${pathname}`,(err,stat)=>{
        if(err){
            res.writeHeader(404);
            res.write('Not Found');
            res.end();
        }else {
                if(ifMS){
                    let time_client = Math.floor(new Date(ifMS).getTime()/1000) ;
                    let time_server =  Math.floor(stat.mtime.getTime()/1000) ;
                    
                    if(time_client < time_server){
                        sendFileToClient();
                    }else{
                        res.writeHeader(304);
                        res.write('Not Modified');
                        res.end();
                    }

                }else {
                    sendFileToClient()
                }

                function sendFileToClient(){
                    let rs = fs.createReadStream(`www${pathname}`);
                    res.setHeader("Cache-Control",'no-cache');
                    res.setHeader("Last-Modified", stat.mtime.toGMTString());

                    rs.pipe(res);

                    rs.on('error',err=>{
                        res.writeHeader(404);
                        res.write("not found!");
                        res.end();
                    });
                }

            //
            
        }
    })
    


});

server.listen(8080);