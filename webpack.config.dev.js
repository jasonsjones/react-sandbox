const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    output: {
        path: path.join(__dirname + '/dist/'),
        filename: '[name].js'
    },
    devServer: {
        inline: true,
        port: 4200,
        historyApiFallback: true
    },
    resolve: {
        alias: {
            sldsCss: path.join(__dirname + "/node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css")
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
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}