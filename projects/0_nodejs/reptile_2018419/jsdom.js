// const JSDOM = require('jsdom').JSDOM ;
const fs= require('fs');
const JSDOM = require('jsdom').JSDOM;

fs.readFile('test.html',(err,buffer)=>{
    if(err){
        console.log('read failure');
    }else{
        let html = buffer.toString();

        // 
        let jsdom = new JSDOM(html);

        let document = jsdom.window.document;

        let $ = document.querySelectorAll.bind(document);



        console.log(document);
    //    let aTxt = document.querySelector('input.txt1');

       let aTxt = $('input.txt1')[0];


       console.log(aTxt.value);
    }
});

