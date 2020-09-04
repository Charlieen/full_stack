const fs = require('fs');
const config =require('../config');

function log(server){
    server.use(async (ctx,next)=>{
        fs.appendFile(config.logPath,`[${Date.now()}] ${ctx.method} ${ctx.url}\r\n`, async err=>{
            await next();
        });

       await next();
    })
}

/*
native fs.appendFile can not know async so we should use Promise to wrap it and the it is ok.

*/
// function log(server){
//     server.use(async (ctx,next)=>{
//         await new Promise((resolve,reject)=>{
//             fs.appendFile(config.logPath,`[${Date.now()}] ${ctx.method} ${ctx.url}\r\n`,err =>{
//                 resolve();
//             });
//         });

//         await next();
//     })
// }

module.exports= log;
