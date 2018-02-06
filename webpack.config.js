const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + '/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'sass-loader'
            }, {
                loader: 'css-loader'
            }]
        }]
    },
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        host:'10.75.164.126',
        inline: true
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        })
    ]
}