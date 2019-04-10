const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
var config={

     //tell webpack the root file of our server application
        entry:'./src/client/Client.js',
    //tell webpack output file where it is generated
        output:{ 
            filename:'bundle.js',
            path:path.resolve(__dirname,'public'),
        },
        devtool: 'inline-source-map'
}

module.exports = merge(baseConfig,config);