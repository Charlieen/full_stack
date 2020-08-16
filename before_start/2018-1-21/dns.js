const dns = require('dns');

dns.resolve('google.com',(err,res)=>{
    if(err){

    }else{
        console.log(res);
    }
})