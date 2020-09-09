const pathLib= require('path');
module.exports = {
    entry: {
       index: './src/index', 
       test:  './src/1'
    },
    output:{
        path: pathLib.resolve('dest/'), // target dir
        filename:'[name].bundle.js' //output file name;

    }

} 