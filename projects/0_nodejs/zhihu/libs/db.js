const Mysql= require('mysql-pro');
const config = require('../config');

 // connect to db mysql
 let db= new Mysql({
    mysql:{
       host:config.db_host,
       port:config.db_port,
       user:config.db_user,
       password:config.db_pass,
       database:config.db_name
    }
});

db.execute = async sql => {
    try {
     await  db.startTransaction();

     let res;

     if(typeof sql =='string'){
       res =  await  db.executeTransaction(sql);
     }else {
         sql.forEach(async item=>{
         res =  await  db.executeTransaction(sql);
         })
     }
     
     await  db.stopTransaction();

     return res;

    } catch (error) {
        console.log(error);
        return null;
        
    }  
};

module.exports= db;