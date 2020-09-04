const koa= require('koa');

let server=new koa();
server.listen(8080);

server.use(ctx =>{
    console.log(ctx.cookies.get('a'));
    ctx.cookies.set('b',5);
    ctx.response.body='adddd';
})