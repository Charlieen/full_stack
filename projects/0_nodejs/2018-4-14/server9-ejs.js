
const koa= require('koa');
const ejs = require('koa-ejs');
const pathLib= require('path');

let server=new koa();
server.listen(8080);

ejs(server,{
    root:pathLib.resolve('template'),
    layout:false,
    viewExt:'ejs',

})

// pug.use(server);

// server.use(pug);

server.use(async ctx=>{
    await ctx.render('2',{name:'dzg',age:22})
})

