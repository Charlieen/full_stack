const ejs = require('ejs');


ejs.renderFile('./template/ejs/2_3.html',{
    a:12,
    b:5,
    str:'woshi <strong>Ren</strong>',
    arr:[1,2,3,4],
    header_path:'component/header.html'
},(err,data)=>{
    if(err){
      //   alert(err);
        console.log('render error');
        console.log(err);
    }else {
        console.log(data);
    }
})

