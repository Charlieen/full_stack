const Koa= require('koa')
const Router = require('koa-router');

const server = new Koa();
const router = new Router();

router.get('/test/:id',(ctx)=>{
   
    ctx.body=`<p>request /test${ctx.params.id}</p>`
    ctx.set('Content-Type','application/json')
})

 

server.use(async (ctx,next)=>{
    // const path= ctx.path;
    // const method = ctx.method;
    // ctx.body=`<span>${path}${method}</span>`
    await next()
})

server.use(router.routes())

// server.use(async (ctx,next)=>{
//     ctx.body='<span>KOA Render2</span>'
// })

server.listen(3000,()=>{
    console.log('koa server listening at 3000')
})