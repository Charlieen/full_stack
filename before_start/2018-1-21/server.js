const http = require('http');

let server = http.createServer((req,res)=>{

    switch (req.url) {
        case '/aaa':
            res.write('aaa');
            break;
        case '/bbb':
            res.write('dddd');
            break;
        case '/1.html':
            res.write('<html><body>hello world!</body></html>');
            break;      
        default:
            break;
    }
  
    res.end();
});


server.listen('8080');