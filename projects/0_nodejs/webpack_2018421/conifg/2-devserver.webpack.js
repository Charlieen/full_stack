const pathLib= require('path');
const WebPack = require('webpack');
module.exports={
    mode:'development',
    entry:'./src/index',
    output:{
        path: pathLib.resolve('dest'),
        filename:'bundle.js'
    },
    plugins:[
        new WebPack.HotModuleReplacementPlugin()
    ],
    devServer:{
       
        contentBase:            pathLib.resolve('static'),
        port:                   8090,
        hot:                    true,
        historyApiFallback:     true
    }
}