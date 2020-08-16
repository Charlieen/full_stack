const fs= require('fs');

fs.readFile('1.txt',(err,data)=>{

    if(err){
        console.log('error!!');
    }else{
        console.log(data.toString());
    }
   
});

fs.writeFile('3.txt','abcdsdefefwe',err=>{
    if(err){
        console.log(err);
    }else{
        console.log('success');
    }
})
