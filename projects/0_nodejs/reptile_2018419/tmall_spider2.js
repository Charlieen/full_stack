const request = require('./libs/request');
const fs= require('fs');


(async ()=>{
    try {
        let {body,headers} = await request('http://www.zhihu.com/');

       
        fs.writeFile('temp/sohu.html',body,err=>{
            if(err){
                console.log(err);
            }else{
                console.log('success!');
            }
        })

    } catch (error) {
        console.log('request failure!')
    }
    

  
    
})()










