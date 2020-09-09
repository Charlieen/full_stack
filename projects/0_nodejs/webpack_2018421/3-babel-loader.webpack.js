const pathLib= require('path');

module.exports={
    mode:'development',
    entry:'./src/es6.js',
    output:{
        path:pathLib.resolve('dest'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_module/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['env']
                    }
                }
            }
        ]
    }
}