const  http = require('http');
const fs = require('fs');
const zlib = require('zlib');

let server = http.createServer((req,res)=>{
    let rs = fs.createReadStream(`www${req.url}`);

    // rs.pipe(res);
    
    let gz = zlib.createGzip();

    // server tell browser  now i give your data is  Content-Encoding : gzip 
    res.setHeader('Content-Encoding','gzip');

    rs.pipe(gz).pipe(res);

    rs.on('error',err=>{
        res.writeHeader(404);
        res.write('not found');
        res.end();
        //console.log('read failure')
    });

});

server.listen(8080); 