let b = new Buffer('abccc-=-ddder-=-qereeraare-=-jiji-=-xiangshang');
console.log(b.length);

let bb= new Buffer('abc');

console.log(bb.indexOf('-=-'));
console.log('-=-'.length);
console.log(b.slice(b.indexOf('-=-')+'-=-'.length,b.length).toString())

// console.log(b.slice(0,5).toString());

// console.log([1,2,3,4,5,6,7].slice(3,5));
// Buffer.prototype.split= Buffer.prototype.split||

function split (b,p){
    let arr =[];
    let op =b;
    let index=0;
    const p_length = p.length;
    while(op.indexOf(p)>0){
        index = op.indexOf(p);
        arr.push(op.slice(0,index));
        op =op.slice(index+p_length,op.length);
    }
    arr.push(op);

    arr.forEach(x=> console.log(x.toString()));
 }

 Buffer.prototype.split =Buffer.prototype.split||function(p){
    let arr =[];
    let op =this;
    let index=0;
    const p_length = p.length;
    while(op.indexOf(p)>0){
        index = op.indexOf(p);
        arr.push(op.slice(0,index));
        op =op.slice(index+p_length,op.length);
    }
    arr.push(op);

  return arr;
 }

//split(b,'-=-');

b.split('-=-');




