const fs = require('fs');

 let rs = fs.createReadStream('1.png');
 let ws = fs.createWriteStream('2.png');

 rs.pipe(ws); 

 rs.on('error', err=>{
     console.log('read failure');
 });

 ws.on('finish', ()=>{
     console.log('write finished!');

 })