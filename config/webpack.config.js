const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path')

const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(rootPath, 'dist'),
        library: `${pkg.name}`,
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new UglifyJsPlugin({
            compress: {
              warnings: false
            },
            sourceMap: true
        })
    ]
}

module.exports = config