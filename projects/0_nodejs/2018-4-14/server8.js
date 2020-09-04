const koa= require('koa');
const session = require('koa-session');

let server=new koa();
server.listen(8080);

server.keys=require('./.keys');


server.use(session({},server));


server.use(ctx =>{

    

   if(ctx.session['count']){
       ctx.session['count']++;
   }else{
       ctx.session['count']=1;
   }
    ctx.response.body=`you are ${ctx.session['count']} times visit my site!`;
})