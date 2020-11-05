/* eslint-disable */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    /**
     *  Entry source js files
     */
    entry: {
        main: ['./src/js/index.js']
    },
    /**
     * Output js files
     */
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js', // 'js/[name].[hash].js',
        publicPath: './'
    },
    module: {
        rules: [
            /**
             *  ESLint will be used to lint all JavaScript.
             *  Please update .eslintrc.js for configuration. Site: http://eslint.org/
             */
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                exclude: /(node_modules|vendors)/,
                loader: 'eslint-loader'
            },
            /**
             * Load Babel to compile ES6 to ES5
             * https://babeljs.io/
             */
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            /**
             * Compile SCSS files to CSS
             */
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: [
                    /**
                     * MiniCssExtractPlugin
                     * https://webpack.js.org/plugins/mini-css-extract-plugin/
                     */
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          hmr: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')()
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            /**
             * Compile pug files and place them in the dist folder
             * https: //pugjs.org/api/getting-started.html
             */
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new CopyWebpackPlugin([
            { from: './src/images', to: 'images' },
            { from: './src/svg', to: 'svg' },
            { from: './src/favicons', to: 'favicons' }
        ])
    ]
}
