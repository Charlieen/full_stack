const koa= require('koa');
const Pug = require('koa-pug');
const pathLib= require('path');

let server=new koa();
server.listen(8080);

const pug = new  Pug({
    viewPath: pathLib.resolve('./template'),
    app:server
});

// pug.use(server);

// server.use(pug);

server.use(async ctx=>{
    console.log(pathLib.resolve('./template/'));
    await ctx.render('1',{a:12})
})

