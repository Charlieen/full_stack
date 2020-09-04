const koa = require('koa');
const betterBody = require('koa-better-body');
const convert = require('koa-convert');
const path = require('path');

// const router = require('koa-router');




let server = new koa();
server.listen(8080);

// server.use(convert(betterBody));
server.use(convert(betterBody({
    uploadDir:path.resolve('./upload'),
    keepExtensions:true
})));

// let r1= router();

server.use(async ctx=>{
    console.log(ctx.request.fields);
    console.log(ctx.request.files); 
})

// r1.post('/aaa', (ctx,next)=>{
//     console.log(ctx); 
//     console.log(ctx.request.fields);
//     console.log(ctx.request.files);

// })

// server.use(r1.routes());