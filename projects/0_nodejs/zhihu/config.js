const pathLib= require('path');
module.exports={
    // basic
    port: 8080,
    uploadDir: pathLib.resolve('www/upload'),
    wwwDir:pathLib.resolve('www'),
    //secret
    secret_key:'ddzzgg',

    //log
    logPath:pathLib.resolve('www/log/access.log'),

    //database
    db_host:'localhost',
    db_port:3306,
    db_user:'root',
    db_pass:'',
    db_name:'zhihu',

    

}