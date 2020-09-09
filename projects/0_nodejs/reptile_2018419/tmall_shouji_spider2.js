const request = require('./libs/request');
const fs= require('fs');
const Mysql = require('mysql-pro');
const JSDOM = require('jsdom').JSDOM;
const gbk= require('gbk');

let db= new Mysql({
    mysql:{
        host:'localhost',
        port:3306,
        user:'root',
        password:'',
        database:'tmall_shouji'
    }
});

async function query(sql){

  await  db.startTransaction();
  let data = await db.executeTransaction(sql);
  await db.stopTransaction();

  return data;

}

function html2$(html){

    let document = new JSDOM(html).window.document;
    return document.querySelectorAll.bind(document);

}

function indexParser(buffer){
  
    let $= html2$(html2$(buffer.toString())('textarea.f1')[0].value);
  

   let  result= Array.from($('li')).map( li=> {
      
          let oA= li.getElementsByClassName('mod-g-photo')[0];

          return {
           url:'https:'+ oA.href,
           img_src: 'https:'+ oA.children[0].getAttribute('data-lazyload-src'),
           name:li.getElementsByClassName('mod-g-tit')[0].children[0].innerHTML,
           description: li.getElementsByClassName('mod-g-desc')[0].innerHTML,
           price: li.getElementsByClassName('mod-g-nprice')[0].innerHTML.match(/\d+(\.\d+)?/g)[0] ,
           sales: li.getElementsByClassName('mod-g-sales')[0]? li.getElementsByClassName('mod-g-sales')[0].innerHTML.match(/\d+/g)[0]:'',

        };
    }); 

  

    return result;
}

async function indexSpider(){
    try {
        let {body,headers} = await request('https://shouji.tmall.com/');
        let datas= indexParser(body);
        indexProcessor(datas);
    } catch (error) {
        console.log('index request failure!')
    }
}

async function indexProcessor(datas){

    // 1. into db
    console.log(datas.length);

    // for(let i=0;i<datas.length;i++){
    //   let rows=  await query(`select * from item_table where url='${datas[i].url}'`);

    //   if(rows.length>0){
    //     await query(`update item_table set img_src='${datas[i].img_src}',name='${datas[i].name}',description= '${datas[i].description}'
    //         ,price= ${datas[i].price},sales= ${datas[i].sales}  where id=${rows[0].id}
    //     `);
    //   }else{
    //       let sql = `insert into item_table(id,url,img_src,name,description,price,sales)values
    //       (0,'${datas[i].url}','${datas[i].img_src}','${datas[i].name}','${datas[i].description||''}',${datas[i].price},${datas[i].sales||0})`;

    //       // console.log(sql);

    //       await query(sql);
    //   }
    // }

    //2.continue to  get detail

    // for(let i=0;i<datas.length;i++){

    //     await detailSpider(datas[i].url);
    // }

    let url=`https://detail.tmall.com/item.htm?spm=a222t.8063993.4954155005.8.32f87f57c2vafR&acm=lb-zebra-164656-978614.1003.4.2269880&id=616280047803&scm=1003.4.lb-zebra-164656-978614.ITEM_616280047803_2269880&sku_properties=10004:7169121965;5919063:6536025`

    await detailSpider(url);

    async function detailSpider(url){
        try {
            let {body,headers} = await request(url);

            console.log(body);
            let datas= detailParser(body);

            detailProcessor(data);
        } catch (error) {
            console.log('detail request failure!')
        }
    }

    function detailParser(body){

        let $= html2$(gbk.toString('utf-8',body));
        let attributes={};

        console.log($);

        Array.from($('.attributes-list li')).map(li=>{
             let [key,value]=  li.innerHTML.split(': ');
             console.log(key);
             attributes[key]=value;
        });

        console.log(Object.keys(attributes));
    }

    async function detailProcessor(data){

    }
}

// main enter 

(async()=>{
    indexSpider();
})()










