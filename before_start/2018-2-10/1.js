this.onmessage= function(res){
   let {a,b} = res.data;
   console.log(a);
   this.postMessage(a+b);
}