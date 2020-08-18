const http = require('http');
const io= require('socket.io');

let httpServer = http.createServer();
httpServer.listen(8080);

let wsServer = io.listen(httpServer);

wsServer.on('connection',sock=>{
   // sock.emit();
   // sock.on();

   sock.on('aaa',function(a,b,c){
        console.log(a,b,c);
   });
   
   setInterval(()=>{
        sock.emit('newdate',new Date().toTimeString());
   },1000)
})