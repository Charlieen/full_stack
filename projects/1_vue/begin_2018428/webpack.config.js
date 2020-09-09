const pathLib= require('path');

module.exports={
    entry:'./js/main',
    output:{
        path:pathLib.resolve('dest'),
        filename:'bundle.js',
    }
} 