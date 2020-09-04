// function errorHandle(error){
//     switch (error.type) {
//         case 'db':
            
//             break;
//         case 'server1':
//             break;
//         case 'view1':
            
//         break;
    
//         default:
//             break;
//     }
// }

// module.exports= errorHandle;

module.exports= server =>{
    server.use(handler);
};

async function handler(ctx,next){
    try {
        await next();
    } catch (e) {
        // handle all the error
        ctx.body='server is in maintenance , please wait in patient!'
      //  await next();
    }
}