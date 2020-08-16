const fs = require('fs');

fs.readFile('1.txt', (err,data)=>{
    fs.writeFile('2.txt',data, ()=>{})
})