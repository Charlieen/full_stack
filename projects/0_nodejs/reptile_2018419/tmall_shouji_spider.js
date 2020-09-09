const request = require('./libs/request');
const fs= require('fs');


(async ()=>{
    try {
        let {body,headers} = await request('https://shouji.tmall.com/?spm=875.7931836/B.category2016015.1.66144265W271EH&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561662186585_708026');

       
        fs.writeFile('temp/tmall_shouji.html',body,err=>{
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










