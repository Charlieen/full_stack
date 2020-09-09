const pathLib= require('path');

module.exports={
    mode:'development',
    entry:'./src/2',
    output:{
        path:pathLib.resolve('dest'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:{
                    loader: 'css-loader'
                }
            }
        ]
    }
}