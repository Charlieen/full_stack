
const koa= require('koa');
const Mysql = require('mysql-pro');
const router = require('koa-router');

const db = new Mysql({
    mysql:{
        host:'localhost',
        port:3306,
        user:'root',
        password:'',
        database:'201804212'
    }
});


let server=new koa();
server.listen(8080);


let r1 = router();
server.use(r1.routes());


r1.get('/user',async ctx=>{
    let id = ctx.query.id;


//  http://localhost:8080/user?id=1%3Bdelete%20from%20user_table

//  select * from user_table where id=1;delete from user_table

    // let sql = `select * from user_table where id=${id}`;

    // console.log(sql);

    try {
        await db.startTransaction();
        let data= await db.executeTransaction(`select * from user_table where id=?`, [id]);
        await db.stopTransaction();
    
    } catch (error) {
        ctx.response.body='database is in maintenance , please '
    }
   
     ctx.response.body=data;
})