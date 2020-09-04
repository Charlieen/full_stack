const fs= require('fs');

module.exports= function(req,res,next){

   
    let arr=[];
    // client ip
    // time
    // method
    // address
    console.log(req.connection);
    
    //
    let oDate = new Date();

    arr.push('['+oDate.toGMTString()+']');

    //method;
    arr.push(req.method);

    arr.push(req.url);

    fs.appendFile('logs/access.log', arr.join(' ')+'\n', (err,data)=> {
     
        if(err){
            console.log('log write error:',err);
        }

        next();

    });


};