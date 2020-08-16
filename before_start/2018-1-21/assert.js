const assert = require('assert');

function sum(a,b){
    assert(arguments.length == 2,'must have two params');
    assert(typeof a== 'number','first must is number');
    assert(typeof b== 'number','second must is number');
    return a+b;
}

console.log(sum(2,'dd'));