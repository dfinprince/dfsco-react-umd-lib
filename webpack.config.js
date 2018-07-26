const path = require('path')

const resolve = require('./webpack.config.resolve')
const modules = require('./webpack.config.modules')

module.exports = {
    entry: './src/lib/index.js',
    output: {
        path: path.resolve(__dirname, './umd'),
        filename: 'index.js',
        // export to AMD, CommonJS, or window
        libraryTarget: 'umd',
        // the name exported to window
        library: 'dfsco-react-unpkg-lib'
    },
    resolve,
    module: modules,
    mode: 'development',
};