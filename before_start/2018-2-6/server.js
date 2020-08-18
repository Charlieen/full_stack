const http = require('http');
const urlLib = require('url');
const querystring = require('querystring');

http.createServer((req,res)=>{

//     Access-Control-Allow-Origin: *
// Access-Control-Allow-Origin: <origin>
// Access-Control-Allow-Origin: null
    
   //  console.log(req.headers['x-my-origin-charlie']);
//    if(req.headers['origin']== 'null' || req.headers['origin'].startsWith('http://abc.com')){

    if(req.headers['origin']== 'null' || req.headers['origin'].startsWith('http://localhost')){
        res.setHeader('Access-Control-Allow-Origin','*');  // two dangerous
    }


    let{pathname:url, query:get}= urlLib.parse(req.url,true);

    let arr=[];
    req.on('data',data=>{
        arr.push(data);
    })

    req.on('end',()=>{
      let post= querystring.parse(Buffer.concat(arr).toString());
        console.log(url,get,post);

        res.write("hello 2.html")
        res.end(); 
    })
}).listen(8080);

