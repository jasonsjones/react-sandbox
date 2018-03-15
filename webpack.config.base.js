const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-svg-inline'
        ]
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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
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
        }),
        new ExtractTextPlugin("styles.css"),
    ]
};