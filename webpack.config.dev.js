/* eslint-disable */
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        open: true,
        hot: true,
        historyApiFallback: true
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename: 'index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/ticket-to-work.pug',
            filename: 'ticket-to-work.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/return-to-work.pug',
            filename: 'return-to-work.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/work-while-on-ssdi.pug',
            filename: 'work-while-on-ssdi.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/request-a-call.pug',
            filename: 'request-a-call.html',
            inject: true
        })
    ],
});