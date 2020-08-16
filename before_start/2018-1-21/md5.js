const crypto = require('crypto');

let obj = crypto.createHash('md5');

obj.update('123');
obj.update('456');


function md5(str){
    let obj = crypto.createHash('md5');

    obj.update(str);
    return obj.digest('hex');
}

console.log( md5(md5('123456'+'ade234dfe')));