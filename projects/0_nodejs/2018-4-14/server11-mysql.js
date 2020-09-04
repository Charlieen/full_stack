
const koa= require('koa');
const mysql = require('koa-mysql');
const convert = require('koa-convert');

const db= mysql.createPool({host:'localhost',port:3306,user:'root',password:'',database:'201804212'});

let server=new koa();
server.listen(8080);



// server.use(function *(ctx){

//     let data = yield db.query( `select * from user_table`);

//     console.log(data);

//     ctx.response.body= 'data';
// })

server.use(async ctx=>{
    let data = await convert(db.query(`select * from user_table`));

    ctx.response.body= data;
})

