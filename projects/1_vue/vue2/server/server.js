const koa= require('koa');
const router = require('koa-router');

let server= new koa();
server.listen(8081);

server.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin','*');
    await next();
});

let r1= router();

server.use(r1.routes());
r1.get('/list',async ctx=>{
    ctx.body= [
        {name:'24k watch',price:356,sales:3581},
        {name:'24k phone',price:36,sales:358},
        {name:'24k cloth',price:56,sales:381},
        {name:'24k tower',price:156,sales:3181},
        {name:'24k watch',price:3356,sales:13581},
        {name:'被子',price:3356,sales:13581} 

    ];


})