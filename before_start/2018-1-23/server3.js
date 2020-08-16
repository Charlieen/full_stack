const http = require('http');
const url = require('url');

let server = http.createServer((req,res)=>{
    let obj = url.parse(req.url,true);

    let {pathname, query} = obj;

    console.log(pathname,query);

    res.end();
});

server.listen(8080);