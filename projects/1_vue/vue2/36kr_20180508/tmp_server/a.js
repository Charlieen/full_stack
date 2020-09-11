const koa=require('koa');
const router=require('koa-router');

let server=new koa();
server.listen(8081);

server.use(async (ctx, next)=>{
  ctx.set('Access-Control-Allow-Origin', '*');

  await next();
});

let r=router();

r.get('/a', async ctx=>{
  ctx.body=[12,4,5,6];
});




server.use(r.routes());
