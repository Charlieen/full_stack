const fs = require('fs');
fs.stat('./www/1.txt',(err,stat)=>{
    if(err){
        console.log('get file failure')
    }else {
        console.log(typeof stat.mtime);
        console.log(stat.mtime.constructor);    }
})