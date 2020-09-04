const pug = require('pug');

console.log(pug.renderFile('./template/pug/1.pug',{
    pretty:true,
    name:'dzg',
    a:12,b:20,
    arr:[1,2,3,4]
}));