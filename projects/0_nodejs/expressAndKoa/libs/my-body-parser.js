const querystring = require('querystring');

exports.urlencoded = function(req,res,next){
  

    let str='';
    req.on('data',data=>{
        str += data;
    });

    req.on('end',()=>{
        //console.log(querystring);
       req.body=querystring.parse(str);
      
        next();
    });


}