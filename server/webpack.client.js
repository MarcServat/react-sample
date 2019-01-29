const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    // The root file of ou server app
    entry: './src/client/client.js',

    // Where to put output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')  // @params name directory and folder name
    }
};

module.exports = merge(baseConfig, config);