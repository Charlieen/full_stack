const http = require('http');
const net = require('net'); // TCP  native socket
const crypto = require('crypto');

 //1. 
//  let httpServer = http.createServer((req,res)=>{
//      console.log('connected');
//  });

//  httpServer.listen(8080);

/*
                <--
ws    update    http 
              data  (key)
              Sec-WebSocket-Key: ZvpF5X8jYPYhnKzrOco7Gw==
*/


let server = net.createServer(sock=>{
    console.log('connected!');

    // have data coming
    /*
    In addition to Upgrade headers, the client sends a Sec-WebSocket-Key header 
    containing base64-encoded random bytes, and the server replies with a hash of
     the key in the Sec-WebSocket-Accept header. This is intended to prevent 
     a caching proxy from re-sending a previous WebSocket conversation,[34] 
     and does not provide any authentication, privacy, or integrity. 
     The hashing function appends the fixed string 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 
     (a UUID) to the value from Sec-WebSocket-Key header (which is not decoded from base64),
      applies the SHA-1 hashing function, and encodes the result using base64.[35]
    */

    /*
    The HTTP 101 Switching Protocols response code indicates
     the protocol the server is switching to as requested by
      a client which sent the message including the Upgrade request header.
    */ 
   // shake hand only need once;
    sock.once('data',data=>{
        console.log('hand shake start...');
        let str = data.toString();
        let lines = str.split('\r\n');

        // discard one line and last two lines
        lines = lines.slice(1,lines.length-2);
        //
        let headers ={};

        lines.forEach(line => {
           let [key,val]= line.split(': ');
    
           headers[key.toLowerCase()]=val;
        });

            if(headers['upgrade']!='websocket'){
                console.log('other protocol',headers['upgrade']);
                sock.end();
            }else if(headers['sec-websocket-version']!=13){
                console.log('wrong version',headers['sec-websocket-version']);
                sock.end();
            }else{
                let key = headers['sec-websocket-key'];
                let mask ='258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
                // sha1(key+mask)->base64 => client

                let hash = crypto.createHash('sha1');
                hash.update(key+mask);
                let key2= hash.digest('base64');
                sock.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade:websocket\r\nConnection:Upgrade\r\nSec-WebSocket-Accept:${key2}\r\n\r\n`)
                console.log('hand shake end');

                // from now   receive the real data

                sock.on('data',data=>{
                    console.log('has data la!');
                    console.log(data);
                })

            }

           //  console.log(headers);

    });
 
    //disconnect 
    sock.on('end',()=>{
        console.log('client has disconnected!')
    })
});

server.listen(8080);