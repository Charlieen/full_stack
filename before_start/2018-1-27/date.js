let oDate = new Date();

console.log(oDate.toGMTString());

let date2 = new Date(oDate.toGMTString());

console.log(date2.toGMTString());