const webpack = require('webpack');

const config = {
    context: __dirname + '/src', // `__dirname` is root of project and `src` is source
    entry: {
        app: './test.js'
    },
    output: {
        path: __dirname + '/dist', // `dist` is the destination
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    devServer: {
        open: true, // to open the local server in browser
        contentBase: __dirname + '/src'
    }
};

module.exports = config;
