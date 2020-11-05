/* eslint-disable */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename: 'index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/ticket-to-work.pug',
            filename: 'ticket-to-work/index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/return-to-work.pug',
            filename: 'return-to-work/index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/work-while-on-ssdi.pug',
            filename: 'work-while-on-ssdi/index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/request-a-call.pug',
            filename: 'request-a-call/index.html',
            inject: false
        }),
        new HTMLInlineCSSWebpackPlugin(),
        new WebpackShellPlugin({
            // onBuildStart:[
            //     'node webp.js'
            // ],
            onBuildEnd:[
                'node copy.js'
            ]
        })
    ],
});