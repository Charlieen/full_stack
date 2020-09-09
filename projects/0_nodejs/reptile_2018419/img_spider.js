const request = require('./libs/request');
const fs= require('fs');


(async ()=>{
    try {
        let {body,headers} = await request('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');

       
        fs.writeFile('temp/logo.png',body,err=>{
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










