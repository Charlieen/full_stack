const request = require('./libs/request');
const fs= require('fs');


(async ()=>{
    try {
        let {body,headers} = await request('https://duonaolive.com/play?id=f9fdd95c505533d5970f90fa8214932fff26eb54dfea7b6177593cf12c85bc9a&episode=1&route=0');

       
        fs.writeFile('temp/test.mp4',body,err=>{
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










