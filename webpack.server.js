const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
var config={

    //inform webpack that we are bulding a buncle for node js rather than browser
        target:'node',
     //tell webpack the root file of our server application
        entry:'./src/index.js',
    //tell webpack output file where it is generated
        output:{ 
            filename:'bundle.js',
            path:path.resolve(__dirname,'build'),
        },
        externals:[webpackNodeExternals()],
        devtool: 'inline-source-map'
}
module.exports = merge(baseConfig,config);