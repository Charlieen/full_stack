const koa = require('koa');
const db= require('./libs/mysql');
const router = require('koa-router');


let server= new koa();
server.listen(8081);

let r1= new router();
server.use(r1.routes());

//API
/**
 * 1:list
 *  /api/house/page/:page
 * =>{err:false,data:xxx}
 */
r1.get('/api/house/page/:page', async ctx=>{
    let {page}= ctx.params;
    page= parseInt(page);
    if(isNaN(page)|| page<1){
        page=1;
    }
    const page_size =8;
    let start= (page-1)* page_size;


    let data= await db.query(`select * from house_table limit ${start},${page_size}`);

    if(data.length ==0){
        ctx.response.body= {err:true,data:[]};
    }else {
        ctx.response.body= {err:false,data};
    }   
});

r1.get('/api/house/:id', async ctx=>{
    let {id} = ctx.params;

    let data = await db.query(`select * from house_table where id='${id}'`);
    if(data.length ==0){
        ctx.response.body={err:true, data:null};
    }else{
        ctx.response.body= {err:false,data:data[0]};
    }
})
