const koa= require('koa');
const router = require('koa-router');

let server= new koa();
server.listen(8082);

server.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin','*');
    await next();
});


let r= router();

r.get('/a', async ctx=>{
    ctx.body=[1,2,3,4,5];
});

server.use(r.routes()); 