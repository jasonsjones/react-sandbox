const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js',
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-svg-inline'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            sldsCss: path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'),
            sldsImages: path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/assets/images'),
            sldsIcons: path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/assets/icons')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                // TODO: use the ExtractTextPlugin to extract the css to own file
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader?name=/fonts/[name].[ext]'
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'raw-loader'
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/images/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: "vendor",
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: "manifest",
        })
        // add uglifyjs-webpack-plugin to prod flow
    ]
};