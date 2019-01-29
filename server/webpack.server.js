const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternal = require('webpack-node-externals');
const config = {
    // Buldding bundle for NodeJS, rather for the browser
    target: 'node',

    // The root file of ou server app
    entry: './src/index.js',

    // Where to put output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')  // @params name directory and folder name
    },
    externals: [webpackNodeExternal()]
};


module.exports = merge(baseConfig, config);