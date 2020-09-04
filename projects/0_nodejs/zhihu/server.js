 const koa= require('koa');
 const staticCache= require('koa-static-cache');
 const body= require('koa-better-body');
 const convert= require('koa-convert');

 const session= require('koa-session');
 const config = require('./config');
 const Router= require('koa-router');
 const ejs= require('koa-ejs');
 const pathLib= require('path');
 const error = require('./libs/errorHandle');
 const logLib = require('./libs/log');

 //connect db;
let db= require('./libs/db');

let server= new koa();
server.listen(config.port);


// top position to handle error:

error(server);
logLib(server); 

// global share pattern
server.use(async (ctx,next)=>{
    ctx.db=db; 
    await next();
});




//post
server.use(convert(body({
    uploadDir: config.uploadDir
})));

//session
server.keys=config.secret_key;
server.use(session({},server));

//ejs

ejs(server,{
    root:pathLib.resolve('template'),
    layout:false,
    viewExt: '.ejs.html',
    cache: false,
    debug:false
});


//router
let mainRouter= new Router();

mainRouter.use('/', require('./routers/index'));
// mainRouter.use('/user', require('./routers/user'));
// mainRouter.use('/article', require('./routers/article'));
// mainRouter.use('/admin', require('./routers/admin'));

server.use(mainRouter.routes());


