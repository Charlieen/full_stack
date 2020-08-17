const http = require('http');
const cluster = require('cluster');
const os =require('os');
const process = require('process')

if(cluster.isMaster){
    for(let i=0;i<os.cpus().length;i++){
        cluster.fork();
    }

    console.log('main process');
    
}else{

//  console.log(process.pid);

    let server = http.createServer((req,res)=>{
        console.log(process.pid);
      
        res.write('aaaa');
        res.end();

        while(true){
            const a=10;
        }
    });

    server.listen(8080);

    console.log('server is open , at 8080');

}

 

 