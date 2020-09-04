//const  express = require('express');

const koa = require('koa');
const router = require('koa-router');

let server = new koa();
server.listen(8080);

let r1= router();

server.use(r1.routes());

r1.get('/aaa',(ctx,next) => {
    console.log(ctx);
    // ctx.req  native req -- node req
    //ctr.request
    // ctr.response

    // ctx.response.body="dag";


    console.log(ctx.request.headers);
    
    ctx.response.body={a:12,dzg:'ddddd'};
    // ctx.response.set('head1',222);

    ctx.response.status= 403;

});