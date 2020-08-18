const http = require('http');
const io= require('socket.io');

let httpServer = http.createServer((req,res)=>{

}).listen(8080);

let wsServer = io.listen(httpServer);

let aSock=[];
wsServer.on('connection',sock=>{
    aSock.push(sock);

    sock.on('disconnect',()=>{
        aSock= aSock.filter(s=> s!= sock);
    })
   
    console.log(aSock.length);
   sock.on('msg',str=>{
       aSock.forEach(s=>{
           if(s!= sock){
               s.emit('msg',str);
           }
       })
   })

})
